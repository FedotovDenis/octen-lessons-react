import type { User } from '../types/user';

interface UserItemProps {
  user: User;
}

export const UserItem = ({ user }: UserItemProps) => {
  return (
    <div className="user-item">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <span>@{user.username}</span>
    </div>
  );
}