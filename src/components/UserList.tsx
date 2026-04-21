import type { User } from '../types/user';
import { UserItem } from './UserItem';

interface UserListProps {
  users: User[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const UserList = ({ users, isLoading, error }: UserListProps) => {
  if (isLoading) {
    return <div className="loading">Загрузка пользователей...</div>;
  }

  if (error) {
    return <div className="error">Ошибка загрузки: {error.message}</div>;
  }

  if (!users || users.length === 0) {
    return <div className="empty">Пользователи не найдены</div>;
  }

  return (
    <div className="user-list">
      <h2>Список пользователей</h2>
      <div className="user-grid">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}