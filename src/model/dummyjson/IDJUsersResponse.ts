import type { IDJUser } from "./IDJUser";

export interface IDJUsersResponse {
    users: IDJUser[];
    total: number;
    skip: number;
    limit: number;
}
