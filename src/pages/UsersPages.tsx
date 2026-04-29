import { useDispatch } from "react-redux"
import { useAppSelector, userSlicsActions } from "../main"
import { useEffect } from "react"

export const UsersPages = () => {

const userSlice = useAppSelector(state => state.userSlice)

const dispatch = useDispatch()

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            dispatch(userSlicsActions.loadUsers(value))
        })

}, [])
    
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