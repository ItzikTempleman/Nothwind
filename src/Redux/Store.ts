//Rhe entire application global state:
import type {ProductModel} from "../Models/ProductModel.ts";
import {configureStore} from "@reduxjs/toolkit";
import {productSlice} from "./ProductSlice.ts";
import type {EmployeeModel} from "../Models/EmployeeModel.ts";
import {employeeSplice} from "./EmployeeSplice.ts";
import {UserModel} from "../Models/user-models/UserModel.ts";
import {userSlice} from "./UserSlice.ts";

export type AppState={
    products:ProductModel[],
    employees:EmployeeModel[],
    user: UserModel
};



export const store=configureStore<AppState>(
    {
        reducer:{
            products:productSlice.reducer,
            employees:employeeSplice.reducer,
            user: userSlice.reducer
        }
    }
)