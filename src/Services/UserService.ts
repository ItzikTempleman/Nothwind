import {UserModel} from "../Models/user-models/UserModel.ts";
import axios from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import {jwtDecode} from "jwt-decode";
import {store} from "../Redux/Store.ts";
import {userSlice} from "../Redux/UserSlice.ts";
import {CredentialsModel} from "../Models/user-models/CredentialsModel.ts";

class UserService {

    public constructor(){
        const token= localStorage.getItem("token");
        if (token){
            const dbUser=jwtDecode<{user:UserModel}>(token).user;
            store.dispatch(userSlice.actions.initUser(dbUser))
        }
    }


    public async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(appConfig.registerUrl, user)
        const token: string = response.data;
        console.log(token)

       const dbUser= jwtDecode<{user:UserModel}>(token)

        store.dispatch(userSlice.actions.initUser(dbUser))

        localStorage.setItem("token", token);
    }


    public async login(credential: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(appConfig.loginUrl, credential)
        const token: string = response.data;
        console.log(token)

        const dbUser= jwtDecode<{user:UserModel}>(token)

        store.dispatch(userSlice.actions.initUser(dbUser))
        localStorage.setItem("token", token);
    }



    public logout():void{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        store.dispatch(userSlice.actions.logoutUser());
        localStorage.removeItem("token");
    }
}

export const userService = new UserService();
