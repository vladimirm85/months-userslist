import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://yalantis-react-school-api.yalantis.com/api',
});

export const MONTHS = [
  {
    id: '1',
    name: 'January',
  },
  {
    id: '2',
    name: 'February',
  },
  {
    id: '3',
    name: 'March',
  },
  {
    id: '4',
    name: 'April',
  },
  {
    id: '5',
    name: 'May',
  },
  {
    id: '6',
    name: 'June',
  },
  {
    id: '7',
    name: 'July',
  },
  {
    id: '8',
    name: 'August',
  },
  {
    id: '9',
    name: 'September',
  },
  {
    id: '10',
    name: 'October',
  },
  {
    id: '11',
    name: 'November',
  },
  {
    id: '12',
    name: 'December',
  },
];

export type ColorsIndexes =
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

export const MONTHCOLORS = {
  '0': '#E0E0E0',
  '1': '#E0E0E0',
  '2': '#E0E0E0',
  '3': '#2C98F0',
  '4': '#2C98F0',
  '5': '#2C98F0',
  '6': '#2C98F0',
  '7': '#43A047',
  '8': '#43A047',
  '9': '#43A047',
  '10': '#43A047',
  '11': '#E10050',
};
