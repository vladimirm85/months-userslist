import React from 'react';
import { MonthInterface } from '../App';

export interface MonthPropsInterface {
  month: MonthInterface;
}

export const Month: React.FC<MonthPropsInterface> = (
  props: MonthPropsInterface
): JSX.Element => {
  return <div key={props.month.id}>{props.month.name}</div>;
};
