import "./EditEmployee.css";
import {useEffect, useState} from "react";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {useForm} from "react-hook-form";
import type {EmployeeModel} from "../../../Models/EmployeeModel.ts";
import {useNavigate, useParams} from "react-router-dom";
import {employeeService} from "../../../Services/EmployeeService.ts";
import {notify} from "../../../Utils/Notify.ts";
import {Button, TextField} from "@mui/material";

export function EditEmployee() {
    useTitle("Edit employee");
    const [image, setImage] = useState("");
    const {register, handleSubmit, setValue} = useForm<EmployeeModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.id!;

    useEffect(() => {
        employeeService.getOneEmployee(id)
            .then(employeeToUpdate => {
                    setValue("firstName", employeeToUpdate.firstName);
                    setValue("lastName", employeeToUpdate.lastName);
                    setValue("title", employeeToUpdate.title);
                    setValue("birthDate", employeeToUpdate.birthDate);
                    setValue("city", employeeToUpdate.city);
                    setValue("country", employeeToUpdate.country);
                    setImage(employeeToUpdate.imageUrl!);
                }
            )
            .catch(err => console.log(err.message))
    }, []);


    async function updateField(employee: EmployeeModel) {
        try {
            employee.image = (employee.image as unknown as FileList)[0];
            employee.id = id;
            await employeeService.updateEmployee(employee);
            notify.success("Employee updated successfully");
            navigate("/employees/" + employee.id)
        } catch (err: unknown) {
            notify.error(err);
        }
    }

    return (
        <div className="EditEmployee">
            <form onSubmit={handleSubmit(updateField)}>

                <TextField
                    label="First name"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="First name"
                    {
                        ...register("firstName")
                    }/>

                <TextField
                    label="Family name"
                    fullWidth
                    inputProps={{minLength: 2, maxLength: 30}}
                    required
                    placeholder="Family name"
                    {
                        ...register("lastName")
                    }/>

                <TextField
                    label="Position"
                    fullWidth
                    inputProps={{minLength: 5, maxLength: 20}}
                    required
                    placeholder="Position"
                    {
                        ...register("title")
                    }/>

                <TextField
                    label="City"
                    inputProps={{minLength: 3, maxLength: 30}}
                    required
                    fullWidth
                    placeholder="City"
                    {
                        ...register("city")
                    }/>

                <TextField
                    label="Country"
                    fullWidth
                    inputProps={{minLength: 3, maxLength: 30}}
                    required
                    placeholder="Country"
                    {
                        ...register("country")
                    }/>

                <TextField
                    label="Birth date"
                    fullWidth
                    placeholder="Birth date"
                    {
                        ...register("birthDate")
                    }/>

                <img src={image}/>


                <TextField
                    variant="standard"
                    InputProps={{disableUnderline: true}}
                    type="file"
                    fullWidth
                    inputProps={
                        {accept: "image/*"}
                    }  {

                        ...register("image")
                    }
                    onChange={(it) => {
                        const target = it.target as HTMLInputElement;
                        const file = target.files?.[0];
                        if (file) {
                            setImage(URL.createObjectURL(file));
                        }
                    }
                    }/>

                <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    variant="contained"
                >Update employee details</Button>
            </form>
        </div>
    );
}
