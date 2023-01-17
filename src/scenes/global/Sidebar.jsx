import "react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Avatar, Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import userImage from "../../assets/user.png";
import { useThemeSettings } from "../../hooks/useThemeSettings";

const items = [
    {
        title: "Dashboard",
        to: "/",
        icon: <HomeOutlinedIcon />,
    },
    {
        title: "Manage Team",
        to: "/team",
        icon: <PeopleOutlinedIcon />,
    },
    {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon />,
    },
    {
        title: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />,
    },
    {
        title: "Profile Form",
        to: "/form",
        icon: <PersonOutlinedIcon />,
    },
    {
        title: "FAQ Page",
        to: "/faq",
        icon: <HelpOutlinedIcon />,
    },
    {
        title: "Bar Chart",
        to: "/bar",
        icon: <BarChartOutlinedIcon />,
    },
    {
        title: "Pie Chart",
        to: "/pie",
        icon: <PieChartOutlinedIcon />,
    },
    {
        title: "Line Chart",
        to: "/line",
        icon: <TimelineOutlinedIcon />,
    },
    {
        title: "Geography Chart",
        to: "/geography",
        icon: <MapOutlinedIcon />,
    },
];

const Item = ({ title, to, icon, selected, setSelected }) => {
    const [colors] = useThemeSettings();
    const selectItem = () => setSelected(title);

    return (
        <>
            <Link to={to} style={{ textDecoration: "none", color: "unset" }}>
                <MenuItem active={selected === title} style={{ color: colors.grey[100] }} icon={icon} onClick={selectItem}>
                    <Typography>{title}</Typography>
                </MenuItem>
            </Link>
            {title === "Dashboard" || title === "Invoices Balances" || title === "FAQ Page" ? (
                <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
                    {title === "Dashboard" ? "Data" : title === "Invoices Balances" ? "Pages" : "Charts"}
                </Typography>
            ) : null}
        </>
    );
};

const Sidebar = () => {
    const [colors] = useThemeSettings();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const toggleCollapsed = () => setIsCollapsed(!isCollapsed);

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                    paddingBottom: "20px",
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: `transparent !important`,
                },
                "& .pro-menu-item": {
                    padding: `5px 35px 5px 20px !important`,
                    listStyleType: "none",
                    cursor: "pointer",
                    ".pro-inner-item": {
                        display: "flex",
                        gridColumnGap: "10px",
                        alignItems: "center",
                    },
                },
                "& .pro-menu-item:hover": {
                    color: `#868dfb !important`,
                },
                "& .pro-menu-item.active": {
                    color: `#6870fa !important`,
                },
                "& .pro-inner-item": {
                    padding: "0 !important",
                },
                "::webkit-scrollbar": {
                    display: "none",
                },
            }}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={toggleCollapsed}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px",
                            color: colors.grey[100],
                        }}>
                        {!isCollapsed && !isMobile ? (
                            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                                <Typography variant="h5" color={colors.grey[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={toggleCollapsed}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        ) : null}
                    </MenuItem>
                    {isCollapsed ? null : (
                        <Box mb="25px">
                            <Avatar alt="User Avatar" src={userImage} sx={{ width: "100px", height: "100px", margin: "0 auto" }} />
                            {/* <Box display="flex" justifyContent="center" alignItems="center">
                                <img alt="user-profile" width="100px" height="100px" src={userImage} style={{ cursor: "pointer", borderRadius: "50%" }} />
                            </Box> */}
                            <Box textAlign="center">
                                <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0" }}>
                                    Ucha Gasviani
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    React Admin Page
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
                {isCollapsed ? null : (
                    <Box paddingLeft={!isCollapsed ? "10%" : undefined}>
                        {items.map((item) => (
                            <Item key={item.title} title={item.title} to={item.to} icon={item.icon} selected={selected} setSelected={setSelected} />
                        ))}
                    </Box>
                )}
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
