import { type FC } from "react";
import type { IProduct } from "../../models/IProduct";

type PropsType = {
  product: IProduct;
};

export const AuthResourceComponent: FC<PropsType> = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.thumbnail} alt={product.title} width="100" />
    </div>
  );
};

export default AuthResourceComponent;
