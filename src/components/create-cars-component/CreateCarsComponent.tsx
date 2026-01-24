import { useForm } from "react-hook-form";
import type { ICar } from "../../models/ICar";
import { CarValidators } from "../../validators/CarValidators";
import { joiResolver } from "@hookform/resolvers/joi";
import * as joi from 'joi'
import { createCarPage } from "../../services/api.service";




export const CreateCarsComponent = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ICar>({
        mode: 'all', resolver: joiResolver(CarValidators)
    })

    const createHandler = (data: ICar) => {
        createCarPage(data).then(res => {
            console.log('The machine has been successfully created on the server', res);
        });
    }

    return (
        <div className={'form-container'}>
            <form onSubmit={handleSubmit(createHandler)}>
                <div className={'form-group'}>
                    <label>Brand:</label>
                    <input type="text" {...register('brand')} />
                    <p className={'error-msg'}>{errors.brand?.message}</p>
                </div>
                <div className={'form-group'}>
                    <label>Model:</label>
                    <input type="text" {...register('model')} />
                    <p className={'error-msg'}>{errors.model?.message}</p>
                </div>
                <div className={'form-group'}>
                    <label>Year:</label>
                    <input type="number" {...register('year', { valueAsNumber: true })} />
                    <p className={'error-msg'}>{errors.year?.message}</p>
                </div>
                <div className={'form-group'}>
                    <label>Price:</label>
                    <input type="number" {...register('price', { valueAsNumber: true })} />
                    <p className={'error-msg'}>{errors.price?.message}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="submit">Submit</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </div>
    );
};