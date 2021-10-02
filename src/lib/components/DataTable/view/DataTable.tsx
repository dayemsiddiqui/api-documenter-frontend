import React, { ReactNode } from "react";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableRow,
} from "@windmill/react-ui";
import { DataTableConfiguration, useDataTable } from "../state/useDataTable";

export interface DataTableProps<T> {
  data: Array<T>;
  config: DataTableConfiguration<T>;
}

export const DataTable = <T extends object>(
  props: DataTableProps<T> & { children?: ReactNode }
) => {
  const {
    rows,
    columnLabels,
    totalResults,
    resultsPerPage,
    onPageChange,
    renderRow,
  } = useDataTable(props.data, props.config);
  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <tr>
            {columnLabels.map((label) => (
              <TableCell>{label}</TableCell>
            ))}
          </tr>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>{renderRow(row)}</TableRow>
          ))}
        </TableBody>
      </Table>
      <TableFooter>
        <Pagination
          totalResults={totalResults}
          resultsPerPage={resultsPerPage}
          label="Table navigation"
          onChange={onPageChange}
        />
      </TableFooter>
    </TableContainer>
  );
};
