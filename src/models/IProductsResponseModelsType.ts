import type { IProduct } from "./IProduct";




export interface IProductsResponseModelsType {
total: number;
skip: number;
limit: number;
products: IProduct[];
}