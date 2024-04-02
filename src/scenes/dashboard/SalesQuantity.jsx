import { Box, Typography, useMediaQuery } from "@mui/material";
import BarChart from "../../components/BarChart";

export const SalesQuantity = ({ colors }) => {
    const isNonLarge = useMediaQuery((theme) => theme.breakpoints.up("lg"));

    return (
        <Box gridColumn={isNonLarge ? "span 4" : "span 12"} gridRow="span 2" backgroundColor={colors.primary[400]}>
            <Typography variant="h5" fontWeight="600" sx={{ p: "30px 30px 0 30px" }}>
                Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
                <BarChart isDashboard={true} />
            </Box>
        </Box>
    );
};
