import "./Register.css";
import {UserModel} from "../../../Models/user-models/UserModel.ts";
import {useForm} from "react-hook-form";
import {userService} from "../../../Services/UserService.ts";
import {notify} from "../../../Utils/Notify.ts";
import {useNavigate} from "react-router-dom";

export function Register() {

    const {register, handleSubmit} = useForm<UserModel>()
    const navigate = useNavigate();
async function send(user:UserModel){
        try{
            await userService.register(user)
            navigate("/home");
            notify.success("Welcome")
        }catch (err:any){
            notify.error(err)
        }

}

    return (
        <div className="Register">

	<form onSubmit={handleSubmit(send)}>
        <label>First name:
        </label>
        <input type="text" {...register("firstName")}/>

        <label>Family name:
        </label>
        <input type="text" {...register("lastName")}/>

        <label>Enter email:
        </label>
        <input type="email" {...register("email")}/>

        <label>Enter password:
        </label>
        <input type="password" {...register("password")}/>

        <button type="submit">Register</button>
    </form>

        </div>
    );
}
