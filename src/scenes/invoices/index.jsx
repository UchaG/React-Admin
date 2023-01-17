import { Box, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import Header from "../../components/Header"
import { mockDataInvoices } from './../../data/mockData';
import { useThemeSettings } from '../../hooks/useThemeSettings';

const Invoices = () => {
    const [colors] = useThemeSettings();

    const columns = [
        {
            field: "id",
            headerName: "ID"
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    {params.row.cost}
                </Typography>
            )
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1
        }
    ]

    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of Invoice Balances" />
            <Box m="40px 0 0" height="75vh" sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[700]
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    border: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer": {
                    backgroundColor: colors.blueAccent[700],
                    borderTop: "none"
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`
                }
            }}>
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
            </Box>
        </Box>
    )
}

export default Invoices;