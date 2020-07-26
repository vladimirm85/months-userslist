import React from 'react';

export const Month: React.FC<{
  month: { id: string; name: string };
}> = (props: { month: { id: string; name: string } }): JSX.Element => {
  return <div key={props.month.id}>{props.month.name}</div>;
};
