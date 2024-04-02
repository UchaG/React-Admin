import { Box } from "@mui/material";
import { Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import { useThemeSettings } from "./../../hooks/useThemeSettings";
import { Top } from "./Top";
import { Stat } from "./Stat";
import { LineChartBox } from "./LineChartBox";
import { RecentTransactions } from "./RecentTransactions";
import { Campaign } from "./Campaign";
import { SalesQuantity } from "./SalesQuantity";
import { GeoTraffic } from "./GeoTraffic";

const Dashboard = () => {
    const [colors] = useThemeSettings();

    const stats = [
        { title: "12,361", subtitle: "Emails Sent", progress: "0.75", increase: "+14%", icon: <Email sx={{ color: colors.greenAccent[600], fontSize: "26px" }} /> },
        { title: "431,225", subtitle: "Sales Obtained", progress: "0.5", increase: "+21%", icon: <PointOfSale sx={{ color: colors.greenAccent[600], fontSize: "26px" }} /> },
        { title: "32,441", subtitle: "New Clients", progress: "0.30", increase: "+5%", icon: <PersonAdd sx={{ color: colors.greenAccent[600], fontSize: "26px" }} /> },
        { title: "1,325,134", subtitle: "Traffic Inbound", progress: "0.80", increase: "+43%", icon: <Traffic sx={{ color: colors.greenAccent[600], fontSize: "26px" }} /> },
    ];

    return (
        <Box m="20px">
            <Top colors={colors} />

            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                {/* Statistics */}

                {stats.map((stat, i) => (
                    <Stat key={i} {...stat} />
                ))}

                <LineChartBox colors={colors} />
                <RecentTransactions colors={colors} />
                <Campaign colors={colors} />
                <SalesQuantity colors={colors} />
                <GeoTraffic colors={colors} />
            </Box>
        </Box>
    );
};

export default Dashboard;
