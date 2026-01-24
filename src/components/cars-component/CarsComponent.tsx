import { useState } from "react";
import { getCars } from "../../services/api.service";
import type { ICar } from "../../models/ICar";
import { useEffect } from "react";
import { CarComponent } from "./CarComponent";





export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getCars().then(cars => setCars(cars));
    }, []);
    return (
        <div>
            <ul>
                {
                    cars.map(car => <CarComponent key={car.id} car={car} />)
                }
            </ul>
        </div>
    );
};
