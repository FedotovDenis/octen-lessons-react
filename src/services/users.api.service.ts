import type { IUser } from "../models/IUser";
import type { IBaseResponseModel } from "../models/IBaseResponseModel";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getUsers = async (): Promise<IBaseResponseModel & { users: IUser[] }> =>
    await fetch(`${baseUrl}/users`).then(res => res.json());