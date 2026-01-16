import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { ICart } from '../../models/ICart';
import type { ICartResponseModels } from '../../models/ICartResponseModels';
import { cartService } from '../../services/api.service';
import { CartComponent } from '../cart-component/CartComponent';


export const CartsComponent = () => {

    const { id } = useParams();

    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        if (id) {
            cartService.getCartsOfUser(id)
                .then(({ carts }: ICartResponseModels) => {
                    setCarts(carts);
                });
        }
    }, [id]);
    return (
        <div>
            {
                carts.map((cart: ICart) => <CartComponent key={cart.id} cart={cart} />)
            }
        </div>
    );
};

