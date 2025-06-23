import {UserModel} from "../Models/user-models/UserModel.ts";
import {AppState} from "../Redux/Store.ts";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Role} from "../Models/user-models/Role.ts";
import {notify} from "./Notify.ts";
import {useEffect} from "react";

export function useAdmin() {

    const user = useSelector<AppState, UserModel>(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.role !== Role.Admin) {
            notify.error("You are not admin")
            navigate("/login")
        }
    }, []);

}


