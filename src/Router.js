import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import GettingStarted from "./pages/GettingStarted";
import WalletRecovery from "./pages/WalletRecovery";
import Footer from "./components/Footer";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import History from "./pages/History";
import Setting from "./pages/Setting";

function Router() {
  return (
    <BrowserRouter>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        p={2}
      >
        <Box>
          <Sidebar />
        </Box>
        <Routes>
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/wallet-recovery" element={<WalletRecovery />} />
          <Route
            path="/dashboard"
            element={<MainLayout childComponent={<Dashboard />} />}
          />
          <Route
            path="/portfolio"
            element={<MainLayout childComponent={<Portfolio />} />}
          />
          <Route
            path="/history"
            element={<MainLayout childComponent={<History />} />}
          />
          <Route
            path="/setting"
            element={<MainLayout childComponent={<Setting />} />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default Router;
