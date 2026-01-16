import type { ICart } from "../../models/ICart";
import type { FC } from "react";


type CartComponentProps = {
    cart: ICart;
};

export const CartComponent: FC<CartComponentProps> = ({ cart }) => {
    return (
        <div>
            {cart.id} {cart.total}
        </div>
    );
};