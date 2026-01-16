import type { IUser } from "./IUsers";

export interface IUsersResponseModels {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}