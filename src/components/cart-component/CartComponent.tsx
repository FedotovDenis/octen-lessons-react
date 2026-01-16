import type { ICart } from "../../models/ICart";
import type { FC } from "react";


type CartComponentProps = {
    cart: ICart;
}

export const CartComponent: FC<CartComponentProps> = ({ cart }) => {
    return (
        <div>
            <h2>{cart.id}</h2>
            <p>{cart.total}</p>
            <p>{cart.discountedTotal}</p>
            <p>{cart.userId}</p>
            <p>{cart.totalProducts}</p>
            <p>{cart.totalQuantity}</p>
        </div>
    );
}