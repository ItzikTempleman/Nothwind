import axios, {type AxiosRequestConfig} from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import type {EmployeeModel} from "../Models/EmployeeModel.ts";
import {store} from "../Redux/Store.ts";
import {employeeSplice} from "../Redux/EmployeeSplice.ts";
import {productSlice} from "../Redux/ProductSlice.ts";
import {notify} from "../Utils/Notify.ts";


class EmployeeService {

    public async getAllEmployees(): Promise<EmployeeModel[]> {
        if (store.getState().employees.length > 0) return store.getState().employees;
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
        const employees = response.data
        store.dispatch(employeeSplice.actions.initEmployees(employees))
        return employees;
    }


    public async getOneEmployee(id: number): Promise<EmployeeModel> {

        const employee = store.getState().employees.find(p => p.id === id);
        if (employee) return employee

        const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id);
        return response.data;
    }

    public async addEmployee(employee: EmployeeModel): Promise<void> {
        const options: AxiosRequestConfig = {headers: {"Content-Type": "multipart/form-data"}}
        const response = await axios.post<EmployeeModel>(appConfig.employeesUrl, employee, options)
        const dbProduct = response.data
        store.dispatch(employeeSplice.actions.addEmployee(dbProduct))
    }


    public async updateEmployee(employee: EmployeeModel): Promise<void> {
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        try {
            const response = await axios.put<EmployeeModel>(appConfig.employeesUrl + employee.id, employee, options);
            const dbProduct = response.data;
            store.dispatch(productSlice.actions.updateProduct(dbProduct));
        } catch (err: unknown) {
            notify.error(err)
        }
    }

    public async deleteEmployee(id: number): Promise<void> {
        await axios.delete(appConfig.employeesUrl + id)
    }
}

export const employeeService = new EmployeeService();
