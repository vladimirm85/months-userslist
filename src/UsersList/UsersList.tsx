import React from 'react';
import { UserInterface } from '../App';

interface UsersListPropsInterface {
  users: UserInterface[];
}

export const UsersList: React.FC<UsersListPropsInterface> = (
  props: UsersListPropsInterface
): JSX.Element => {
  return (
    <React.Fragment>
      {props.users.map((user: UserInterface, index: number) => (
        <div key={index}>
          First Name: {user.firstName}, Last Name: {user.lastName}, birthday:{' '}
          {user.dob}
        </div>
      ))}
    </React.Fragment>
  );
};
