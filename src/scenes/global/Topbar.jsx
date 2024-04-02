import { Box, IconButton, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useThemeSettings } from "../../hooks/useThemeSettings";
import { MenuOutlined } from "@mui/icons-material";

const Topbar = ({ openSidebar }) => {
    const [colors, theme] = useThemeSettings();
    const colorMode = useContext(ColorModeContext);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <Box display="flex" justifyContent="space-between" p={"10px 0"} mb="20px" sx={{ width: "100%" }}>
            {isMobile ? (
                <IconButton onClick={openSidebar}>
                    <MenuOutlined />
                </IconButton>
            ) : null}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>{theme.palette.mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}</IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
