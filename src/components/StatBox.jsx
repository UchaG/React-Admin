import { Box, Typography } from "@mui/material"
import { useThemeSettings } from './../hooks/useThemeSettings';
import ProgressCircle from "./ProgressCircle";


const StatBox = ({title, subtitle, icon, progress, increase}) => {
    const [colors] = useThemeSettings()

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{color: colors.grey[100]}}>
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" fontWeight="bold" sx={{color: colors.greenAccent[500]}}>
                    {subtitle}
                </Typography>
                <Typography variant="h5" fontStyle="italic" sx={{color: colors.greenAccent[600]}}>
                    {increase}
                </Typography>
            </Box>
        </Box>
    )
}

export default StatBox