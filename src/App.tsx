import React from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { UserList } from './components/UserList';
import type { User } from './types/user';

const App = () => {
  const { data: users, isLoading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

  return (
    <div className="app">
      <h1>React Fetch Example</h1>
      <UserList users={users} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;