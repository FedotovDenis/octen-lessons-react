import type { ICar } from "../../models/ICar";
import type { FC } from "react";


interface PropsType {
    car: ICar;
}

export const CarComponent: FC<PropsType> = ({ car }) => {
    return (
        <div className={'car-card'}>
            <p>ID: {car.id}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Price: ${car.price}</p>
            <p>Brand: {car.brand}</p>
        </div>
    );
};
