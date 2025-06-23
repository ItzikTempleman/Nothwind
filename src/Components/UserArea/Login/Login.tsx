import "./Login.css";
import {useForm} from "react-hook-form";
import {userService} from "../../../Services/UserService.ts";
import {notify} from "../../../Utils/Notify.ts";
import {useNavigate} from "react-router-dom";
import {CredentialsModel} from "../../../Models/user-models/CredentialsModel.ts";

export function Login() {

    const {register, handleSubmit} = useForm<CredentialsModel>()
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try {
            await userService.login(credentials)
            navigate("/home");
            notify.success("Welcome back")
        } catch (err: unknown) {
            notify.error(err)
        }
    }

    return (
        <div className="Login">

            <form onSubmit={handleSubmit(send)}>
                <label>Your email:
                </label>
                <input type="email" {...register("email")}/>

                <label>Your password:
                </label>
                <input type="password" {...register("password")}/>

                <button type="submit">Login</button>
            </form>

        </div>
    );
}
