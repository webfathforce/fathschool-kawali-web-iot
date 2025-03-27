import { useTheme } from "@table-library/react-table-library/theme";

// Theme for table 
export const TableTheme = () => {
  return useTheme({
    Table: `
      --data-table-library_grid-template-columns: 25% 25% 25% 25%;
      width: 100%;
      max-width: 100%;
    `,
    HeaderRow: `
      background-color: #27272a;
      font-weight: bold;
      color: #f3f4f6;
    `,
    HeaderCell: `
      padding: 12px 16px;
      border-bottom: 1px solid #3f3f46;
    `,
    Row: `
      &:nth-of-type(odd) {
        background-color: #18181b;
      }
      &:nth-of-type(even) {
        background-color: #27272a;
      }
      &:hover {
        background-color: #3f3f46;
      }
    `,
    Cell: `
      padding: 12px 16px;
      border-bottom: 1px solid #3f3f46;
      font-size: 14px;
      color: #f3f4f6;
    `,
  })
}