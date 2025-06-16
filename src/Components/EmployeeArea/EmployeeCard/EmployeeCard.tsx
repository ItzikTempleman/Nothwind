import "./EmployeeCard.css";
import type {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {useNavigate} from "react-router-dom";


type EmployeeCardProps = {
    employee: EmployeeModel;
};



export function EmployeeCard(props: EmployeeCardProps) {
    const navigate = useNavigate()

    function navigateToEmployeeDetails() {
        navigate("/employees/"+props.employee.id)
    }


    return (
        <div className="EmployeeCard" onClick={navigateToEmployeeDetails}>
            <div>
                <span>
                    {props.employee.firstName}
                     {props.employee.lastName}
                </span>
                <span>Title: {props.employee.title}</span>

                <span>Address location:</span>
                <span>
                       {props.employee.city},
                    {props.employee.country}
                </span>

                <span>Birth date: {props.employee.birthDate} </span>
            </div>
            <div>
                <img src={props.employee.imageUrl}/>
            </div>
        </div>
    );
}
