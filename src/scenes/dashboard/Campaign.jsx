import { Box, Typography, useMediaQuery } from "@mui/material";
import ProgressCircle from "../../components/ProgressCircle";

export const Campaign = ({ colors }) => {
    const isNonLarge = useMediaQuery((theme) => theme.breakpoints.up("lg"));

    return (
        <Box gridColumn={isNonLarge ? "span 4" : "span 12"} gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
            <Typography variant="h5" fontWeight="600">
                Campaign
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                <ProgressCircle size="125" />
                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
                    $48,352 revenue generated
                </Typography>
                <Typography>Includes extra misc expenditures and costs</Typography>
            </Box>
        </Box>
    );
};
