import { FC } from 'react';
import type { IUser } from '../../model/IUser';
import PostsComponent from '../posts/PostsComponent';

interface Props {
    user: IUser;
}

export const SingleUserDetailsComponent: FC<Props> = ({ user }) => {
    return (
        <div>
            <div className="user-details">
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
            <div className="user-posts">
                <h3>User Posts</h3>
                <PostsComponent userId={user.id.toString()} />
            </div>
        </div>
    );
};