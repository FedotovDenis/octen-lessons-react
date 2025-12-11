import type {IProductsModel} from "./IProductsModel.ts";

export interface IProductResponseDummyjson {
    products: IProductsModel[];
    total: number;
    skip: number;
    limit: number;
}