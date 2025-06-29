import type {EmployeeModel} from "../Models/EmployeeModel.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


function initEmployees(_: EmployeeModel[], payloadAction: PayloadAction<EmployeeModel[]>) {
    return payloadAction.payload
}

function addEmployee(currentEmployee: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    return [...currentEmployee, action.payload];
}

function updateEmployee(currentEmployeesState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    const newState = [...currentEmployeesState];
    const productToUpdate = action.payload;
    const indexToUpdate = newState.findIndex(p => p.id === productToUpdate.id);
    newState[indexToUpdate] = productToUpdate;
    return newState
}

function deleteEmployee(currentEmployeeState: EmployeeModel[], action: PayloadAction<number>): EmployeeModel[] {
    const newStateOfEmployee = [...currentEmployeeState];
    const indexToDelete = newStateOfEmployee.findIndex(i => i.id === action.payload)
    newStateOfEmployee.splice(indexToDelete, 1);
    return newStateOfEmployee;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const employeeSlice = createSlice<EmployeeModel[]>(
    {
        name: "employeeSlice",
        initialState: [],
        reducers: {
            initEmployees, addEmployee, updateEmployee, deleteEmployee
        }
    }
)