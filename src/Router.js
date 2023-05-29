import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import GettingStarted from "./pages/GettingStarted";
import WalletRecovery from "./pages/WalletRecovery";
import Footer from "./components/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        backgroundColor="#000"
        p={2}
      >
        <Box>
          <Sidebar />
        </Box>
        <Routes>
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/wallet-recovery" element={<WalletRecovery />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default Router;
