import { Box, Typography, useMediaQuery } from "@mui/material";
import { mockTransactions } from "../../data/mockData";

export const RecentTransactions = ({ colors }) => {
    const isNonLarge = useMediaQuery((theme) => theme.breakpoints.up("lg"));

    return (
        <Box gridColumn={isNonLarge ? "span 4" : "span 12"} gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
            <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} color={colors.grey[100]} p="15px">
                <Typography color={colors.grey[100]} variant="h5" fontWeight="bold">
                    Recent Transactions
                </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
                <Box key={transaction.txId + i} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
                    <Box>
                        <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="bold">
                            {transaction.txId}
                        </Typography>
                        <Typography color={colors.grey[100]}>{transaction.user}</Typography>
                    </Box>
                    <Box color={colors.grey[100]}>{transaction.date}</Box>
                    <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                        ${transaction.cost}
                    </Box>
                </Box>
            ))}
        </Box>
    );
};
