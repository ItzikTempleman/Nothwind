//Rhe entire application global state:
import type {ProductModel} from "../Models/ProductModel.ts";
import {configureStore} from "@reduxjs/toolkit";
import {productSlice} from "./ProductSlice.ts";

export type AppState={
    products:ProductModel[],
};

//Store - The main redux object handling it all:

export const store=configureStore<AppState>(
    {
        reducer:{
            products:productSlice.reducer
        }
    }
)