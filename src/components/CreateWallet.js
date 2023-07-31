import * as bip39 from "bip39";
import _sodium from "libsodium-wrappers";
import { pbkdf2Sync } from "pbkdf2";
import {
  Box,
  Collapse,
  Stepper,
  Step,
  StepLabel,
  Input,
  Slide,
  Grid,
  Button,
} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { CreateWalletContext } from "../pages/GettingStarted";
import sha256 from "sha256";
import * as ethers from "ethers";
import { getDeployedAddress } from "../utils/user-operation/UserOp";
import { goerliProvider } from "../utils/user-operation/utils";

const steps = [
  "Create password",
  "Create recovery phrase",
  "Confirm recovery phrase",
];

function CreateWallet() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mnemonic, setMnemonic] = useState("");
  const { currentStep, setCurrentStep } = useContext(CreateWalletContext);
  const [confirmPhrases, setConfirmPhrases] = useState(["", "", ""]);

  const confirmMnemonicIndex = [1, 5, 9];

  function createMnemonic() {
    const mnemonic = bip39.generateMnemonic();
    setMnemonic(mnemonic);
  }

  async function encryptAndStore(mnemonic, password) {
    const nonce = _sodium.randombytes_buf(_sodium.crypto_secretbox_NONCEBYTES);
    const keyHash = pbkdf2Sync(password, "salt", 256, 32, "sha512");

    const encrypted = _sodium.crypto_secretbox_easy(mnemonic, nonce, keyHash);

    const count = 0;
    const ownerPrivKey = sha256.x2(mnemonic + count);
    const ownerAddress = ethers.utils.computeAddress("0x" + ownerPrivKey);
    const accountAddress = await getDeployedAddress(
      ownerAddress,
      "0x".padEnd(66, "0")
    );
    const walletInfo = {
      accounts: [
        {
          owner: ownerAddress,
          creationNonce: count,
          address: accountAddress,
          tokens: [],
          nameTag: `Account #${count + 1}`,
        },
      ],
      currentNonce: count,
    };

    localStorage.setItem("account_infor", JSON.stringify(walletInfo));
    localStorage.setItem("mnemonic", JSON.stringify(encrypted));
    localStorage.setItem("encryption_nonce", JSON.stringify(nonce));
  }

  return (
    <Collapse in={currentStep > 0}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "600px",
        }}
      >
        {currentStep < 4 ? (
          <>
            <Box fontSize="20px" fontWeight="600" pb={3}>
              Create a wallet
            </Box>
            <Box sx={{ marginBottom: "40px" }}>
              <Stepper activeStep={currentStep - 1} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>
                      <Box sx={{ color: "#FFF", fontFamily: "Lexend Exa" }}>
                        {label}
                      </Box>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            {currentStep == 1 ? (
              <Slide
                in={currentStep == 1}
                direction="left"
                mountOnEnter
                unmountOnExit
              >
                <Box width="100%">
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
                      color="#FFF"
                      sx={{
                        paddingLeft: "20px",
                        height: "50px",
                        color: "#FFF",
                        fontFamily: "inherit",
                        fontSize: "18px",
                        fontWeight: "500",
                        border: "2px solid #FFF",
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
                      color="#FFF"
                      sx={{
                        paddingLeft: "20px",
                        height: "50px",
                        color: "#FFF",
                        fontFamily: "inherit",
                        fontSize: "18px",
                        fontWeight: "500",
                        border: "2px solid #FFF",
                        borderRadius: "15px",
                        width: "60%",
                      }}
                    ></Input>
                  </Box>
                </Box>
              </Slide>
            ) : null}
            {currentStep == 2 ? (
              <Slide
                in={currentStep == 2}
                direction="left"
                mountOnEnter
                unmountOnExit
              >
                <Box>
                  <Grid container spacing={2}>
                    {mnemonic.split(" ").map((word, idx) => (
                      <Grid item xs={4}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            border: "1px solid #fff",
                            paddingY: "10px",
                            borderRadius: "10px",
                          }}
                        >
                          {idx + 1 + ". " + word}
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Slide>
            ) : null}
            {currentStep == 3 ? (
              <Slide
                in={currentStep == 3}
                direction="left"
                mountOnEnter
                unmountOnExit
              >
                <Box>
                  <Grid container spacing={2}>
                    {confirmMnemonicIndex.map((item, idx) => (
                      <Grid item xs={4}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Input
                            value={confirmPhrases[idx]}
                            onChange={(e) =>
                              setConfirmPhrases(
                                confirmPhrases.map((w, i) => {
                                  if (idx === i) {
                                    return e.target.value;
                                  } else return w;
                                })
                              )
                            }
                            disableUnderline
                            color="#FFF"
                            sx={{
                              paddingLeft: "20px",
                              height: "50px",
                              color: "#FFF",
                              fontFamily: "inherit",
                              fontSize: "18px",
                              fontWeight: "500",
                              border: "2px solid #FFF",
                              borderRadius: "15px",
                              width: "80%",
                            }}
                            startAdornment={<Box pr={1}>{item + 1}. </Box>}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Slide>
            ) : null}
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              pt={5}
            >
              <Button
                sx={{
                  borderRadius: "15px",
                  border: "1px solid #FFF",
                  padding: "10px",
                  paddingX: "24px",
                  margin: 0,
                  textTransform: "none",
                  fontFamily: "inherit",
                  color: "#FFF",
                }}
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Back
              </Button>
              {currentStep < 4 ? (
                <Button
                  sx={{
                    borderRadius: "15px",
                    border: "1px solid #FFF",
                    padding: "10px",
                    paddingX: "24px",
                    margin: 0,
                    textTransform: "none",
                    fontFamily: "inherit",
                    color: "#FFF",
                  }}
                  onClick={async () => {
                    switch (currentStep) {
                      case 1:
                        if (password != confirmPassword || password === "") {
                          alert("password invalid or missmatched");
                          break;
                        }
                        createMnemonic();
                        setCurrentStep(currentStep + 1);
                        break;
                      case 2:
                        setCurrentStep(currentStep + 1);
                        break;
                      case 3:
                        let isValid = true;
                        for (let i = 0; i < confirmMnemonicIndex.length; i++) {
                          if (
                            ("original phrase: ",
                            confirmPhrases[i] !=
                              mnemonic.split(" ")[confirmMnemonicIndex[i]])
                          ) {
                            alert("invalid recovery phrase");
                            isValid = false;
                            break;
                          }
                        }
                        if (isValid) {
                          setCurrentStep(0);
                          await encryptAndStore(mnemonic, password);
                          break;
                        } else break;
                    }
                  }}
                >
                  Next
                </Button>
              ) : null}
            </Box>
          </>
        ) : null}
      </Box>
    </Collapse>
  );
}

export default CreateWallet;
