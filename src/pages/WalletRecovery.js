import { Box, Button, Paper, Collapse } from "@mui/material";
import { useState, createContext } from "react";
import CombineShares from "../components/CombineShares";
export const WalletRecoveryContext = createContext(null);

function WalletRecovery() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
        }}
      >
        <Collapse in={currentStep == 0}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              borderRadius: "20px",
              padding: "40px",
              backgroundColor: "#DEE2E6",
            }}
          >
            <Box fontSize="20px" fontWeight="600" pb={3}>
              Import your wallet
            </Box>
            <Box pb={3}>Continue your journey by import your wallet.</Box>
            <Box width="70%">
              <Button
                sx={{
                  borderRadius: "25px",
                  border: "2px solid #212529",
                  padding: "10px",
                  paddingX: "24px",
                  margin: 0,
                  textTransform: "none",
                  fontFamily: "inherit",
                  color: "#212529",
                  width: "100%",
                }}
              >
                Import Wallet
              </Button>
            </Box>
            <Box
              children={<Paper />}
              my={5}
              sx={{
                background: "#212529",
                height: "2px",
                width: "500px",
              }}
            />
            <Box fontSize="20px" fontWeight="600" pb={3}>
              Recover your secret
            </Box>
            <Box pb={3}>
              Recover your lost secret by combining shares from your guardians.
            </Box>
            <Box width="70%" pt={2}>
              <Button
                sx={{
                  borderRadius: "25px",
                  border: "2px solid #212529",
                  padding: "10px",
                  paddingX: "24px",
                  margin: 0,
                  textTransform: "none",
                  fontFamily: "inherit",
                  color: "#212529",
                  width: "100%",
                }}
                onClick={() => setCurrentStep(1)}
              >
                Combine shares
              </Button>
            </Box>
          </Box>
        </Collapse>
        <WalletRecoveryContext.Provider value={{ currentStep, setCurrentStep }}>
          <CombineShares />
        </WalletRecoveryContext.Provider>
      </Box>
    </>
  );
}

export default WalletRecovery;
