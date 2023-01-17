import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box, Container, useMediaQuery, Drawer } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { useState } from "react";

const routes = [
    { path: "/", element: <Dashboard /> },
    { path: "/team", element: <Team /> },
    { path: "/invoices", element: <Invoices /> },
    { path: "/contacts", element: <Contacts /> },
    { path: "/bar", element: <Bar /> },
    { path: "/form", element: <Form /> },
    { path: "/line", element: <Line /> },
    { path: "/pie", element: <Pie /> },
    { path: "/geography", element: <Geography /> },
    { path: "/faq", element: <FAQ /> },
];

function App() {
    const [theme, colorMode] = useMode();
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isDrawer, setIsDrawer] = useState(false)

    const closeSidebar = () => setIsDrawer(!isDrawer);
    const openSidebar = () => setIsDrawer(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                    <main className="content" style={{ display: "flex", flexDirection: "row" }}>
                        {isNonMobile ? <Sidebar /> : null}
                        {!isNonMobile ? (
                            <Drawer
                                open={isDrawer}
                                anchor="left"
                                onClose={closeSidebar}
                            >
                                <Sidebar />
                            </Drawer>
                        ) : null}
                        <Container>
                            <Box p="0 20px" sx={{ width: "100%" }}>
                                <Topbar openSidebar={openSidebar} />
                                <Routes>
                                    {routes.map((route, i) => (
                                        <Route key={i} {...route} />
                                    ))}
                                </Routes>
                            </Box>
                        </Container>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
