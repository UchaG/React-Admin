import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import { useThemeSettings } from '../../hooks/useThemeSettings';

export const CustomAccordion = ({question, answer}) => {
    const [colors] = useThemeSettings();

    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}