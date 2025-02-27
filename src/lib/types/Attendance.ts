export type CheckedUser = {
  checkedin?: boolean;
  checkedout?: boolean;
  leave?: string;
  user?: {
    id?: number;
    name?: string;
    role?: string;
    email?: string;
  };
};

export type Attendance = {
  date?: string;
  status?: string;
  check_in?: string;
  check_out?: string;
}
