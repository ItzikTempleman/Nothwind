//Rhe entire application global state:
import type {ProductModel} from "../Models/ProductModel.ts";
import {configureStore} from "@reduxjs/toolkit";
import {productSlice} from "./ProductSlice.ts";
import type {EmployeeModel} from "../Models/EmployeeModel.ts";
import {employeeSplice} from "./EmployeeSplice.ts";

export type AppState={
    products:ProductModel[],
    employees:EmployeeModel[]
};



export const store=configureStore<AppState>(
    {
        reducer:{
            products:productSlice.reducer,
            employees:employeeSplice.reducer
        }
    }
)