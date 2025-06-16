import "./AddEmployee.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {Button, TextField} from "@mui/material";
import {notify} from "../../../Utils/Notify.ts";
import {employeeService} from "../../../Services/EmployeeService.ts";

export function AddEmployee() {
    useTitle("Add employee")
    const {register, handleSubmit} = useForm<EmployeeModel>();
    const navigate = useNavigate();

    async function send(employee: EmployeeModel) {
        try {
            employee.image = (employee.image as unknown as FileList)[0];
            await employeeService.addEmployee(employee)
            notify.success("Employee added successfully");
            navigate("/employees");
        } catch (err: unknown) {
            notify.error(err);
        }
    }

    return (
        <div className="AddEmployee">
            <form onSubmit={handleSubmit(send)}>
                <div className="NameField">
                    <TextField label="First name" placeholder="Enter first name"  {...register("firstName")}/>
                    <TextField label="Family name" placeholder="Enter family name" {...register("lastName")}/>
                </div>
                <TextField label="Title" placeholder="Title position" fullWidth  {...register("title")}/>
                <div className="AddressField">
                    <TextField label="Country" placeholder="Enter country"   {...register("country")}/>
                    <TextField label="City" placeholder="Enter city"   {...register("city")}/>
                </div>
                <TextField  label="Enter date"  placeholder="Enter date" {...register("birthDate")}/>
                <TextField type="file" fullWidth inputProps={{accept: "image/*"}} {...register("image")}/>
                <Button  type="submit" color="primary" fullWidth variant="contained">Add</Button>
            </form>
        </div>
    );
}