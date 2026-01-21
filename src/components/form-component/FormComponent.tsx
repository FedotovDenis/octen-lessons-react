import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { userValidator } from "../../validators/user.validator";


type IFormProps = {
    username: string;
    password: string;
    age: number;
}

export const FormComponent = () => {

    const { handleSubmit, register, formState: { errors, isValid } } = useForm<IFormProps>({ mode: 'all', resolver: joiResolver(userValidator) });

    const customHandler = (FormDataProps: IFormProps) => {
        console.log(FormDataProps);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register("username")} />
                    <p>{errors.username && errors.username.message}</p>
                </label>

                <label>
                    <input type="text" {...register("password")} />
                    <p>{errors.password && errors.password.message}</p>
                </label>

                <label>
                    <input type="number" {...register("age")} />
                    <p>{errors.age && errors.age.message}</p>
                </label>

                <button disabled={!isValid}>Submit</button>
            </form>
        </div>
    )
}