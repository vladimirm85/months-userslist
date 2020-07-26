import React from 'react';
import './App.css';
import { API } from './constants';

export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
}

export const App: React.FC = (): JSX.Element => {
  const [users, setUsers] = React.useState<UserInterface[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get('/task0/users');
        const users = response.data as UserInterface[];
        setUsers(users);
      } catch (e) {
        console.log('Fetch error: ' + e);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      {users.map((user: UserInterface) => (
        <div>{user.firstName}</div>
      ))}
    </div>
  );
};
