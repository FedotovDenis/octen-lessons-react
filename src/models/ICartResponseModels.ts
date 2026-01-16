import type { ICart } from "./ICart";

export type ICartResponseModels = {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}