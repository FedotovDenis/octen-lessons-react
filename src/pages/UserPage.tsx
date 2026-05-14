import { useEffect } from "react"
import { useAppSelector } from "../redax/hooks/useAppSelector.tsx"
import { userSlicsActions } from "../redax/slices/userSlice/userSlice.tsx"
import { useAppDispatch } from "../redax/hooks/useAppDispatch.tsx"
import { useParams } from "react-router-dom"





export const UserPage = () => {

    const {userId: id} = useParams()

    const {loadState} = useAppSelector(state => state.userSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id) {
            dispatch(userSlicsActions.loadUser(id))
        }
    }, [id])

    const user = useAppSelector(state => state.userSlice.user)
    return(
        <div>
            <h2>user {id}</h2>
            {!loadState && <div>Loading...</div>}
            {user && <div>{user.name}</div>}
        </div>
    )
}