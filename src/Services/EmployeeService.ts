import axios from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import type {EmployeeModel} from "../Models/EmployeeModel.ts";

class EmployeeService {
    public async getAllEmployees(): Promise<EmployeeModel[]> {
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
        return response.data;
    }
}

export const employeeService = new EmployeeService();
