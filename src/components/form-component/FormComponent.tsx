import { useForm } from "react-hook-form";


type IFormProps = {
    username: string;
    password: string;
    age: number;
}

export const FormComponent = () => {

    const { handleSubmit, register } = useForm<IFormProps>();

    const customHandler = (FormDataProps: IFormProps) => {
        console.log(FormDataProps);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" {...register("username")} />
                <input type="text" {...register("password")} />
                <input type="number" {...register("age")} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}