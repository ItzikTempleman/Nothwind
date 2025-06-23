import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserModel} from "../Models/user-models/UserModel.ts";

function initUser(_: UserModel[], payloadAction: PayloadAction<UserModel[]>) {
    return payloadAction.payload
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function logoutUser(_: UserModel, _action: PayloadAction): UserModel | null {
    return null;
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const userSlice = createSlice<UserModel>({
    name: "userSlice",
    initialState: new UserModel(),
    reducers: { initUser, logoutUser }
});