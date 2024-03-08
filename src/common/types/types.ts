import { GridColDef } from "@mui/x-data-grid";

export interface DataTableTypes {
  columns: GridColDef[];
  rows: any;
}

export interface Employee {
  id: string;
  name: string;
  dob: string;
  createdAt: Date;
}
