import { DownloadOutlined } from "@mui/icons-material";
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import LineChart from "../../components/LineChart";

export const LineChartBox = ({ colors }) => {
    const isNonLarge = useMediaQuery((theme) => theme.breakpoints.up("lg"));

    return (
        <Box gridColumn={isNonLarge ? "span 8" : "span 12"} gridRow="span 2" backgroundColor={colors.primary[400]}>
            <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                        Revenue Generated
                    </Typography>
                    <Typography variant="h3" fontWeight="500" color={colors.greenAccent[500]}>
                        $59,342,32
                    </Typography>
                </Box>
                <Box>
                    <IconButton>
                        <DownloadOutlined sx={{ color: colors.greenAccent[500], fontSize: "26px" }} />
                    </IconButton>
                </Box>
            </Box>

            <Box height="250px" mt="-20px">
                <LineChart isDashboard={true} />
            </Box>
        </Box>
    );
};
