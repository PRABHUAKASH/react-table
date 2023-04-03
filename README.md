1. Create React application
2. Install react table package using npm i react-table
   3.I Need some json data so I create a data from mackroo to develop mock api for my requirement

//Create a basic Column in the Column.js Component
How many column we want to create the header in the column

// Create a Basic Table folder and import some Folders
those are
import { useTable } from 'react-table';
import MOCK DATA from 'MOCK_DATA.json';
import { COLUMNS } from './Column';

//Use Hooks in the table
using useTable to import the headers and datas
import useMemo to store the value of column and data
useTable can be stored in tableInstane variable

//When Creating a table structure in the app