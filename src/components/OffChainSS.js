import { Box, Button, Input, IconButton, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState, useContext } from "react";
import * as secret from "../utils/secret-sharing/verifiableSecret";
import { AccountContext } from "../Router";

function OffChainSS() {
  const { mnemonic } = useContext(AccountContext);
  const [shares, setShares] = useState([]);
  const [threshold, setThreshold] = useState(1);
  const [totalShares, setTotalShares] = useState(1);
  const [msg, setMsg] = useState("No shares created");

  function handleCreateShares() {
    if (totalShares < threshold || totalShares < 1 || threshold < 1) {
      setMsg("Invalid input value");
    } else {
      const key = JSON.stringify(mnemonic);
      const newShares = secret.share(key, totalShares, threshold);
      console.log(key);
      console.log(newShares);
      setShares(newShares);
      setMsg("Shares created");
    }
  }

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#468faf",
            width: "95%",
            borderRadius: "15px",
            marginTop: "30px",
            padding: "20px",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Box color="#DEE2E6" fontWeight="600">
              Enter the total number of shares:
            </Box>
            <Box px={2} width="20%">
              <Input
                type="number"
                value={totalShares}
                disableUnderline
                color="#FFF"
                sx={{
                  paddingLeft: "10px",
                  height: "50px",
                  color: "#DEE2E6",
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: "500",
                  border: "2px solid #DEE2E6",
                  borderRadius: "15px",
                  width: "100%",
                  "& input[type=number]": {
                    "-moz-appearance": "textfield",
                  },
                  "& input[type=number]::-webkit-outer-spin-button": {
                    "-webkit-appearance": "none",
                    margin: 0,
                  },
                  "& input[type=number]::-webkit-inner-spin-button": {
                    "-webkit-appearance": "none",
                    margin: 0,
                  },
                }}
                onChange={(e) => setTotalShares(parseInt(e.target.value))}
              />
            </Box>
            <Box color="#DEE2E6" fontWeight="600">
              Enter the recovery threshold:
            </Box>
            <Box px={2} width="20%">
              <Input
                value={threshold}
                type="number"
                disableUnderline
                color="#FFF"
                sx={{
                  paddingLeft: "10px",
                  height: "50px",
                  color: "#DEE2E6",
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: "500",
                  border: "2px solid #DEE2E6",
                  borderRadius: "15px",
                  width: "100%",
                  "& input[type=number]": {
                    "-moz-appearance": "textfield",
                  },
                  "& input[type=number]::-webkit-outer-spin-button": {
                    "-webkit-appearance": "none",
                    margin: 0,
                  },
                  "& input[type=number]::-webkit-inner-spin-button": {
                    "-webkit-appearance": "none",
                    margin: 0,
                  },
                }}
                onChange={(e) => setThreshold(parseInt(e.target.value))}
              />
            </Box>
          </Box>
          <Box
            width="100%"
            pr={3}
            pt={3}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                textTransform: "none",
                border: "1px solid #DEE2E6",
                borderRadius: "15px",
                fontFamily: "inherit",
                paddingX: "20px",
                color: "#DEE2E6",
              }}
              onClick={() => handleCreateShares()}
            >
              Generate
            </Button>
          </Box>
        </Box>
        <Box pt={2} display="flex" justifyContent="center">
          {shares.length == 0 ? (
            msg
          ) : (
            <Box>
              {shares.map((s) => (
                <Box
                  sx={{ background: "#0077B6" }}
                  display="flex"
                  alignItems="center"
                  borderRadius="10px"
                  my={1}
                  p={1}
                >
                  <Typography
                    sx={{
                      fontFamily: "Lexend Exa",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "30rem",
                    }}
                  >
                    {s}
                  </Typography>
                  <IconButton onClick={() => navigator.clipboard.writeText(s)}>
                    <ContentCopyIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
export default OffChainSS;
