import {UserModel} from "../Models/user-models/UserModel.ts";
import axios from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import {jwtDecode} from "jwt-decode";
import {store} from "../Redux/Store.ts";
import {userSlice} from "../Redux/UserSlice.ts";

class UserService {


    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(appConfig.registerUrl, user)
        const token: string = response.data;
        console.log(token)

       const dbUser= jwtDecode<{user:UserModel}>(token)

        store.dispatch(userSlice.actions.initUser(dbUser))
    }
}

export const userService = new UserService();
