import { useState, type FormEvent } from "react"

type IFormProps = {
    username: string;
    password: string;
}

export const FormComponent = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username: "Tomas",
        password: "123"
    })

    const handleSabmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({ ...formState, [input.name]: input.value })
    }

    return (
        <div>
            <form onSubmit={handleSabmit}>
                <input type="text" name="username" value={formState.username} onChange={handleInputChange} />
                <input type="text" name="password" value={formState.password} onChange={handleInputChange} />
            </form>
        </div>
    )
}