import { Button, Box } from "@mui/material";
import { useState } from "react";
import OffChainSS from "../components/OffChainSS";
import OnChainSS from "../components/OnChainSS";

function Setting() {
  const [option, setOption] = useState(0);
  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
      >
        <Box display="flex">
          <Button
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              textTransform: "none",
              border: "1px solid #5C80BC",
              borderRadius: "10px",
              fontFamily: "inherit",
              padding: "10px",
              color: `${option === 0 ? "#DEE2E6" : "#ADB5BD"}`,
              background: `${option === 0 ? "#0077B6" : "#DEE2E6"}`,
              "&:hover": {
                background: `${option === 0 ? "#0077B6" : "#DEE2E6"}`,
              },
            }}
            onClick={() => setOption(0)}
          >
            Setup off-chain social recovery
          </Button>
          <Box px={1}></Box>
          <Button
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              textTransform: "none",
              border: "1px solid #5C80BC",
              borderRadius: "10px",
              fontFamily: "inherit",
              padding: "10px",
              color: `${option === 1 ? "#DEE2E6" : "#ADB5BD"}`,
              background: `${option === 1 ? "#0077B6" : "#DEE2E6"}`,
              "&:hover": {
                background: `${option === 1 ? "#0077B6" : "#DEE2E6"}`,
              },
            }}
            onClick={() => setOption(1)}
          >
            Setup on-chain social recovery
          </Button>
        </Box>
        <Box width="100%">{option == 0 ? <OffChainSS /> : <OnChainSS />}</Box>
      </Box>
    </>
  );
}

export default Setting;
