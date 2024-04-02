import { Box, Typography, useMediaQuery } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";

export const GeoTraffic = ({ colors }) => {
    const isNonLarge = useMediaQuery((theme) => theme.breakpoints.up("lg"));

    return (
        <Box gridColumn={isNonLarge ? "span 4" : "span 12"} gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
            <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
                Geograffy Based Traffic
            </Typography>
            <Box height="200px">
                <GeographyChart isDashboard={true} />
            </Box>
        </Box>
    );
};
