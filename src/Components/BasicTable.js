import React, { useMemo } from 'react';
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './Column';
import './table.css';
import GlobalFilter from './GlobalFilter';

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },

    useFilters,
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex } = state;
  return (
    <>
      <h1>Screen One</h1>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {/* <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
      <div>
        <span>
          Page{''}
          <strong>
            {pageIndex + 1} of {pageOptions.length}{' '}
          </strong>
        </span>
        {''}
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          color="success"
        >
          Previous
        </button>
        {''}
        {''}
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          style={{ marginLeft: '2px', color: 'success' }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default BasicTable;
