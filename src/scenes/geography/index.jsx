import { Box } from "@mui/material"
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header"
import { useThemeSettings } from './../../hooks/useThemeSettings';

const Geography = () => {
    const [colors] = useThemeSettings()

    return (
        <Box m="20px">
            <Header title="GEOGRAPHY" subtitle="Geography chart" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeographyChart />
            </Box>
        </Box>
    )
}

export default Geography;