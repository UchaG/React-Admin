import { Box } from "@mui/material";
import { useThemeSettings } from './../hooks/useThemeSettings';

const ProgressCircle = ({progress = "0.75", size = "40"}) => {
    const [colors] = useThemeSettings();
    const angle = 360 * progress;

    return (
        <Box 
            sx={{
                background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                    conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                    ${colors.greenAccent[500]}
                `,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`
            }}
        />
    )   
}

export default ProgressCircle;