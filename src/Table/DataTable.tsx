import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DataTableTypes } from "../common/types/types";

const DataTable = ({ columns, rows }: DataTableTypes) => {
  return (
    <div className="w-fit bg-cyan-100 shadow-lg shadow-cyan-200/50 h-[370.5px]">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        loading={false}
        sx={{
          border: 1,
          borderColor: "primary.light"
        }}
        pageSizeOptions={[5, 10, 20]}
        rowSelection={false}
      />
    </div>
  );
};

export default DataTable;
