import type {ProductModel} from "../Models/ProductModel.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

function initProducts(_: ProductModel[], payloadAction: PayloadAction<ProductModel[]>) {
    return payloadAction.payload;
}

//The entire data to handle in this slice is Northwind entire list of products. Therefore, we use an array
// Reducers to
//Add new product

function addProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    // //Duplicate currentState to a new state
    // const newState = [...currentState];
    // //Take product to add (payload)
    // const productToAdd = action.payload;
    // //Add product to newState
    // newState.push(productToAdd);
    // //Return the newState.
    // Redux will replace currentState with the newState and will report the change to all relevant components
    // return newState;
    return [...currentState, action.payload];
}

function updateProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    const newState = [...currentState];
    const productToUpdate = action.payload;
    const indexToUpdate = newState.findIndex(p => p.id === productToUpdate.id);
    newState[indexToUpdate] = productToUpdate;
    return newState;
}

function deleteProduct(currentState: ProductModel[], action: PayloadAction<number>): ProductModel[] {
    const newState = [...currentState];
    const productToDelete = action.payload;
    const indexDelete = newState.findIndex(p => p.id === productToDelete);
    newState.splice(indexDelete, 1);
    return newState;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const productSlice = createSlice<ProductModel[]>(
    {
        name: "productSlice",
        initialState: [],
        reducers: {
            initProducts, addProduct, updateProduct, deleteProduct
        }
    }
)