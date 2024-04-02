import { Box, useMediaQuery } from "@mui/material";
import StatBox from "../../components/StatBox";
import { useThemeSettings } from "../../hooks/useThemeSettings";

export const Stat = ({ title, subtitle, progress, increase, icon }) => {
    const [colors] = useThemeSettings();
    const isNonMobile = useMediaQuery((theme) => theme.breakpoints.up("sm"));
    const isNonLarge = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    const gridColumn = !isNonMobile ? "span 12" : !isNonLarge ? "span 6" : "span 3";

    return (
        <Box gridColumn={gridColumn} backgroundColor={colors.primary[400]} display="flex" justifyContent="center" alignItems="center">
            <StatBox title={title} subtitle={subtitle} progress={progress} increase={increase} icon={icon} />
        </Box>
    );
};
