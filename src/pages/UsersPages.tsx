import { useEffect } from "react"
import { useAppSelector } from "../redax/hooks/useAppSelector.tsx"
import { userSlicsActions } from "../redax/slices/userSlice/userSlice.tsx"
import { useAppDispatch } from "../redax/hooks/useAppDispatch.tsx"

export const UsersPages = () => {

    const userSlice = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userSlicsActions.loadUsers())
    }, [dispatch])
    
    return(
        <div>
            {
                userSlice.users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    )
}