import type {Role} from "./Role.ts";

export class UserModel {
    public id?: number;
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public password?: string;
    public role?: Role;
}

