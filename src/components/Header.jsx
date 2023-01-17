import { Box, Typography } from "@mui/material";
import { useThemeSettings } from './../hooks/useThemeSettings';

const Header = ({title, subtitle}) => {
    const [colors] = useThemeSettings()

    return (
        <Box mb="30px">
            <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{mb: "5px"}}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header;