import "./EmployeeList.css";
import {useEffect, useState} from "react";
import type {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {employeeService} from "../../../Services/EmployeeService.ts";
import {EmployeeCard} from "../EmployeeCard/EmployeeCard.tsx";
import {notify} from "../../../Utils/Notify.ts";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function EmployeeList() {
    useTitle("Employees")
    const [employees, setEmployees]= useState<EmployeeModel[]>([]);

    useEffect(() => {
        employeeService.getAllEmployees()
            .then(dbEmployees=>
                setEmployees(dbEmployees)
            ).catch(err=>  notify.error(err));
    }, []);


    return (
        <div className="EmployeeList">
            <h4>Employees</h4>
            {
                employees.map(e => <EmployeeCard key={e.id} employee={e}/>)
            }
        </div>
    );
}
