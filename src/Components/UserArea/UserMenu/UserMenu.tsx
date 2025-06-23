import "./UserMenu.css";
import {useSelector} from "react-redux";
import {AppState} from "../../../Redux/Store.ts";
import {UserModel} from "../../../Models/user-models/UserModel.ts";
import {NavLink, useNavigate} from "react-router-dom";
import {userService} from "../../../Services/UserService.ts";
import {notify} from "../../../Utils/Notify.ts";

export function UserMenu() {

    const user = useSelector<AppState, UserModel>(state => state.user)
    const navigate = useNavigate();

    function logout ():void{
        userService.logout();
        notify.success("Bye")
        navigate("/home")
    }
    return (
        <div className="UserMenu">

            {
                !user?.id && <div>
                    <NavLink to="/login">Login</NavLink>
                </div>
            }

            {
                user?.id && <div>
                    <span>Hello {user.firstName} {user.lastName} </span>
                    <NavLink to="#" onClick={logout}>Logout</NavLink>
                </div>
            }
        </div>
    );
}
