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
  getPunchTimes?: PunchTimeDetails[];
}

export interface PunchTimeDetails {
  id: string;
  in_time_ist: Date;
  out_time_ist: Date;
  emp_id: string;
  createdAt: Date;
}
