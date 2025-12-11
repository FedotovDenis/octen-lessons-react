import type {IProductsModel} from "../models/IProductsModel";
import type {IProductResponseDummyjson} from "../models/IProductResponseDymmeyjson";


const endpointProducts = import.meta.env.VITE_API_BASE_URL + '/products';

const loadProducts = async (): Promise<IProductsModel[]> => {
    const responseProducts = await fetch(endpointProducts);
    const data: IProductResponseDummyjson = await responseProducts.json();
    return data.products;
}

export {loadProducts};