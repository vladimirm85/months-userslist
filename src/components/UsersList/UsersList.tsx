import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { UserInterface } from '../../App';

const useStyles = makeStyles({
  container: {
    height: 836,
    margin: '14px 0',
  },
  table: {
    width: '100%',
  },
  item: {
    width: '7%',
    maxWidth: '20px',
    textAlign: 'center',
  },
  text: {
    width: '31%',
    textAlign: 'center',
  },
});

interface UsersListPropsInterface {
  users: UserInterface[];
}

export const UsersList: React.FC<UsersListPropsInterface> = (
  props: UsersListPropsInterface
): JSX.Element => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.item}>#</TableCell>
            <TableCell className={classes.text}>First name</TableCell>
            <TableCell className={classes.text}>Last name</TableCell>
            <TableCell className={classes.text}>Birthday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user: UserInterface, index: number) => (
            <TableRow key={user.id}>
              <TableCell className={classes.item}>{index + 1}</TableCell>
              <TableCell className={classes.text}>{user.firstName}</TableCell>
              <TableCell className={classes.text}>{user.lastName}</TableCell>
              <TableCell className={classes.text}>
                {user.dob.toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
