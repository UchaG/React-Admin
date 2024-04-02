import { Box, Button, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { DownloadOutlined } from "@mui/icons-material";

export const Top = ({ colors }) => {
    const isNonMobile = useMediaQuery((theme) => theme.breakpoints.up("sm"));

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to dashboard" />
            {isNonMobile ? (
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}>
                        <DownloadOutlined sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            ) : null}
        </Box>
    );
};
