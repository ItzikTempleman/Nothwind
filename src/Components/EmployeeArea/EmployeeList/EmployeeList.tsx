import "./EmployeeList.css";
import {useEffect, useState} from "react";
import type {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {employeeService} from "../../../Services/EmployeeService.ts";
import {EmployeeCard} from "../EmployeeCard/EmployeeCard.tsx";
import {notify} from "../../../Utils/Notify.ts";

export function EmployeeList() {

    const [employees, setEmployees]= useState<EmployeeModel[]>([]);

    useEffect(() => {
        employeeService.getAllEmployees()
            .then(dbEmployee=>
                setEmployees(dbEmployee)
            ).catch(err=>  notify.error(err));
    }, []);


    return (
        <div className="EmployeeList">
            {
                employees.map(e => <EmployeeCard key={e.id} employee={e}/>)
            }
        </div>
    );
}
