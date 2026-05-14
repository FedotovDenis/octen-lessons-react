import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../redax/hooks/useAppSelector.tsx"
import { userSlicsActions } from "../redax/slices/userSlice/userSlice.tsx"
import { useAppDispatch } from "../redax/hooks/useAppDispatch.tsx"

export const UsersPages = () => {

    const {users, loadState} = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userSlicsActions.loadUsers())
    }, [dispatch])
    
    return(
        <div>
            {!loadState && <div>Loading...</div>}
            {
                users.map((user) => {
                    return <div key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></div>
                })
            }
        </div>
    )
}