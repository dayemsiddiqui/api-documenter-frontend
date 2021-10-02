import { useEffect, useState } from "react";

export interface DataTableConfiguration<T> {
  columns: Array<{
    columnLabel: string;
    render: (data: T) => any;
  }>;
}

export const useDataTable = <T>(
  data: Array<T>,
  config: DataTableConfiguration<T>
) => {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState<T[]>(data);
  const columnLabels = config.columns.map((col) => col.columnLabel);
  const renderRow = (row: T) => {
    return config.columns.map((col) => {
      return col.render(row);
    });
  };
  // pagination setup
  const resultsPerPage = 10;
  const totalResults = data.length;

  // pagination change control
  function onPageChange(p: number) {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  // This handles pagination
  useEffect(() => {
    setRows(data.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return {
    resultsPerPage,
    totalResults,
    rows,
    columnLabels,
    onPageChange,
    renderRow,
  };
};
