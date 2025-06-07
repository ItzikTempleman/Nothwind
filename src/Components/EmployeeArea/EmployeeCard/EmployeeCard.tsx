import "./EmployeeCard.css";
import type {EmployeeModel} from "../../../Models/EmployeeModel.ts";


type EmployeeCardProps = {
    employee: EmployeeModel;
};


export function EmployeeCard(props: EmployeeCardProps) {

    return (
        <div className="EmployeeCard">
            <br/>
            <div>
            <span>Name: {props.employee.firstName} </span>
            <span>{props.employee.lastName}</span>
            </div>
            <br/>
            <div>
            <span>Position title: {props.employee.title}</span>
            </div>
            <br/>
            <div>
                <span>City: {props.employee.city}, </span>
                <span>{props.employee.country}</span>
            </div>
            <br/>
            <div>
                <span>Birthday: {props.employee.birthDate}</span>
            </div>
            <br/>
            <div>
                <img src={props.employee.imageUrl} alt={props.employee.imageUrl}/>
            </div>
            <hr/>
        </div>
    );
}
