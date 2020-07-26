import React from 'react';
import './Month.css';
import { MonthInterface, UserInterface } from '../../App';
import { MONTHCOLORS } from '../../constants';

type ColorsTypes =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11';

export interface MonthPropsInterface {
  month: MonthInterface;
  setHoveredMonthUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
}

export const Month: React.FC<MonthPropsInterface> = (
  props: MonthPropsInterface
): JSX.Element => {
  const { month, setHoveredMonthUsers } = props;
  const colorIndex = month.users.length > 10 ? 11 : month.users.length;
  const backgroundColor = {
    backgroundColor: MONTHCOLORS[colorIndex.toString() as ColorsTypes],
  };

  return (
    <div
      className={'month'}
      style={backgroundColor}
      onMouseEnter={() => setHoveredMonthUsers(month.users)}
      onMouseLeave={() => setHoveredMonthUsers([])}
    >
      {month.name}
    </div>
  );
};
