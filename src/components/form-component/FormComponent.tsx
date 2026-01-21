import { useForm } from "react-hook-form";



type IFormProps = {
    username: string;
    password: string;
    age: number;
}

export const FormComponent = () => {

    const { handleSubmit, register, formState: { errors, isValid } } = useForm<IFormProps>({ mode: 'all' });

    const customHandler = (FormDataProps: IFormProps) => {
        console.log(FormDataProps);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register("username", {
                        required: true,
                        // pattern: {
                        //     value: /\w+/,
                        //     message: "Wrong username"
                        // }
                        minLength: { value: 1, message: "Wrong username" }
                    })} />
                    <p>{errors.username && errors.username.message}</p>
                </label>

                <label>
                    <input type="text" {...register("password", {
                        required: true,
                        minLength: { value: 3, message: "Wrong short password" },
                        maxLength: { value: 6, message: "Wrong long password" }
                    })} />

                    <p>{errors.password && errors.password.message}</p>
                </label>

                <label>
                    <input type="number" {...register("age", {
                        required: true,
                        valueAsNumber: true,
                        min: { value: 18, message: "You are too young" },
                        max: { value: 65, message: "You are too old" }
                    })} />
                    <p>{errors.age && errors.age.message}</p>
                </label>

                <button disabled={!isValid}>Submit</button>
            </form>
        </div>
    )
}