import {
  Typography,
  Box,
  Button,
  Input,
  IconButton,
  Collapse,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useState } from "react";
import { WalletRecoveryContext } from "../pages/WalletRecovery";
import * as secret from "../utils/secret-sharing/verifiableSecret";
import { encryptAndStore } from "./CreateWallet";
import { useNavigate } from "react-router-dom";

function CombineShares() {
  const navigate = useNavigate();
  const { currentStep, setCurrentStep } = useContext(WalletRecoveryContext);
  const [share, setShare] = useState("");
  const [recoveredKey, setRecoveredKey] = useState(null);
  const [recoveryShares, setRecoveryShares] = useState([]);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Collapse sx={{ width: "60%" }} in={currentStep == 1}>
          <Box
            sx={{
              color: "#DEE2E6",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              borderRadius: "20px",
              padding: "40px",
              backgroundColor: "#468faf",
            }}
          >
            <Box>Share list: </Box>
            <Box py={2} />
            {recoveryShares.length == 0
              ? "Share list is empty"
              : recoveryShares.map((s) => {
                  console.log(s);
                  return (
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
                          color: "#DEE2E6",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "20rem",
                        }}
                      >
                        {s}
                      </Typography>
                      <IconButton
                        sx={{ color: "#DEE2E6" }}
                        onClick={() => navigator.clipboard.writeText(s)}
                      >
                        <ContentCopyIcon />
                      </IconButton>
                      <IconButton
                        sx={{ color: "#DEE2E6" }}
                        onClick={() =>
                          setRecoveryShares(
                            recoveryShares.filter((e) => e !== s)
                          )
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  );
                })}
            <Box py={1}></Box>
            <Box
              py={1}
              width="100%"
              display="flex"
              justifyContent="space-between"
            >
              <Input
                value={share}
                onChange={(e) => setShare(e.target.value)}
                disableUnderline
                color="#FFF"
                sx={{
                  paddingLeft: "10px",
                  height: "50px",
                  color: "#DEE2E6",
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: "500",
                  border: "2px solid #DEE2E6",
                  borderRadius: "15px",
                  width: "80%",
                }}
              />
              <Button
                sx={{
                  fontSize: "15px",
                  textTransform: "none",
                  border: "1px solid #DEE2E6",
                  borderRadius: "15px",
                  fontFamily: "inherit",
                  paddingX: "10px",
                  color: "#DEE2E6",
                }}
                onClick={() => {
                  if (recoveryShares.includes(share)) {
                    alert("share already added");
                  } else {
                    setRecoveryShares([...recoveryShares, share]);
                    setShare("");
                  }
                }}
              >
                Add Share
              </Button>
            </Box>
            <Box py={1}>
              <Button
                sx={{
                  fontSize: "15px",
                  textTransform: "none",
                  border: "1px solid #DEE2E6",
                  borderRadius: "15px",
                  fontFamily: "inherit",
                  paddingX: "10px",
                  color: "#DEE2E6",
                }}
                onClick={() => {
                  if (secret.verify(recoveryShares)) {
                    setRecoveredKey(secret.combine(recoveryShares));
                    setCurrentStep(2);
                  } else {
                    alert("Invalid shares or number of shares");
                  }
                }}
              >
                Recover
              </Button>
            </Box>
            <Box py={1}>
              {recoveredKey ? (
                <Typography
                  sx={{
                    fontFamily: "Lexend Exa",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "20rem",
                  }}
                >
                  Key recover successfully! <br />
                </Typography>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </Collapse>
        <Collapse in={currentStep == 2}>
          <Box
            sx={{
              color: "#DEE2E6",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              borderRadius: "20px",
              padding: "40px",
              backgroundColor: "#468faf",
            }}
          >
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box> Enter password: </Box>
              <Input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                disableUnderline
                color="#DEE2E6"
                sx={{
                  paddingLeft: "20px",
                  height: "50px",
                  color: "#DEE2E6",
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: "500",
                  border: "2px solid #DEE2E6",
                  borderRadius: "15px",
                  width: "60%",
                }}
              ></Input>
            </Box>
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              py={3}
            >
              <Box> Confirm password: </Box>
              <Input
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                disableUnderline
                color="#DEE2E6"
                sx={{
                  paddingLeft: "20px",
                  height: "50px",
                  color: "#DEE2E6",
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: "500",
                  border: "2px solid #DEE2E6",
                  borderRadius: "15px",
                  width: "60%",
                }}
              ></Input>
            </Box>
            <Box width="100%" display="flex" justifyContent="flex-end">
              <Box px={2}>{""}</Box>
              <Button
                sx={{
                  fontSize: "15px",
                  textTransform: "none",
                  border: "1px solid #DEE2E6",
                  borderRadius: "15px",
                  fontFamily: "inherit",
                  paddingX: "10px",
                  color: "#DEE2E6",
                }}
                onClick={async () => {
                  if (password != confirmPassword) {
                    alert("password invalid or missmatched");
                  } else {
                    await encryptAndStore(recoveredKey, password).then(() =>
                      navigate("/getting-started")
                    );
                  }
                }}
              >
                Finish
              </Button>
            </Box>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}

export default CombineShares;
