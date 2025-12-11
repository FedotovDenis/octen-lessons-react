import {useEffect, useState} from "react";
import type {IProductsModel} from "../../models/IProductsModel";
import {loadProducts} from "../../service/api.service";
import {ProductComponent} from "../product-component/ProductComponent";
import styles from './ProductsComponent.module.css';


export const ProductsComponent = () => {
    const [products, setProducts] = useState<IProductsModel[]>([]) // Правильно

    useEffect(() => {
        loadProducts().then(value => setProducts(value))
    }, []);
    return(
        <div className={styles.productsContainer}>
        <h1 className={styles.productsTitle}>Our Products</h1>
            {
                products.map(product => <ProductComponent product={product} key={product.id}/>)
            }
        </div>
    )
}