import columnFilter from './ColumnFilter';

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
    Filter: columnFilter,
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
    Filter: columnFilter,
  },
  {
    Header: 'Gender',
    Footer: 'Gender',
    accessor: 'gender',
    Filter: columnFilter,
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
    Filter: columnFilter,
  },
  {
    Header: 'Address',
    Footer: 'Address',
    accessor: 'address',
    Filter: columnFilter,
  },
];

export const NEXT_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
    Filter: columnFilter,
    disableFilters: true,
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
    Filter: columnFilter,
  },
  {
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
    Filter: columnFilter,
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
    Filter: columnFilter,
  },
];
