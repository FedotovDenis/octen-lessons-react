import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { userActions } from '../redux/slices/UserSlice';
import type { IUser } from '../models/IUser';
import { UserItem } from '../components/UserItem';



export const UsersPage = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <>
            {users.map((user: IUser) => (
                <UserItem key={user.id} user={user} />
            ))}
        </>
    )
}