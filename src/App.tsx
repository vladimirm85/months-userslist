import React from 'react';
import './App.css';
import { API, MONTHS } from './constants';
import { Month } from './Month';
import { UsersList } from './UsersList';

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
    <div className={'container'}>
      <div className={'months'}>
        {MONTHS.map((month: { id: string; name: string }) => (
          <Month month={month} />
        ))}
      </div>

      <div className={'users'}>
        <UsersList users={users} />
      </div>
    </div>
  );
};
