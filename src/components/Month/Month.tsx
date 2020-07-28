import React from 'react';
import './Month.css';
import { MonthInterface, UserInterface } from '../../App';
import { MONTHCOLORS, ColorsIndexes } from '../../constants';

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
    backgroundColor: MONTHCOLORS[colorIndex.toString() as ColorsIndexes],
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
