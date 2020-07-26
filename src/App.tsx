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

export interface MonthInterface {
  id: string;
  name: string;
  users: UserInterface[];
}

export const App: React.FC = (): JSX.Element => {
  const [users, setUsers] = React.useState<UserInterface[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [monthsList, setMonthsList] = React.useState<MonthInterface[]>([]);

  const generateMonthsList = React.useCallback(() => {
    const monthsList = MONTHS.map(
      (month: { id: string; name: string }, index: number): MonthInterface => ({
        id: index.toString(),
        name: month.name,
        users: [],
      })
    );
    users.forEach((user: UserInterface) => {
      const dobMonth = new Date(user.dob).getMonth();
      monthsList[dobMonth].users.push({ ...user, dob: new Date(user.dob) });
    });
    setMonthsList(monthsList);
    setLoading(false);
  }, [users]);

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
    !users.length && fetchUsers();
    generateMonthsList();
  }, [users, generateMonthsList]);

  return (
    <React.Fragment>
      {!loading ? (
        <div className={'container'}>
          <div className={'months'}>
            {monthsList.map((month: MonthInterface) => (
              <Month key={month.id} month={month} />
            ))}
          </div>

          <div className={'users'}>
            <UsersList users={users} />
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </React.Fragment>
  );
};
