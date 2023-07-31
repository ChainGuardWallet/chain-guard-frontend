import {
  Box,
  Button,
  Input,
  InputAdornment,
  IconButton,
  MenuList,
  MenuItem,
  Popover,
  CircularProgress,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import sha256 from "sha256";
import { useEffect, useState, useContext } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { AccountContext } from "../../Router";
import { ethers } from "ethers";
import { goerliProvider } from "../../utils/user-operation/utils";
import Account from "../../abis/Account.json";
import { fillAndSign } from "../../utils/user-operation/UserOp";
import { getAccountInitCode } from "../../utils/user-operation/utils";

function CreateTransactionModal({ handleClose }) {
  const { mnemonic } = useContext(AccountContext);
  const [senderAnchorEl, setSenderAnchorEl] = useState(null);
  const [tokenAnchorEl, setTokenAnchorEl] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [sender, setSender] = useState(null);
  const [tokens, setTokens] = useState(null);
  const [token, setToken] = useState(null);
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAccounts(JSON.parse(localStorage.getItem("account_infor")).accounts);
    setSender(JSON.parse(localStorage.getItem("account_infor")).accounts[0]);
    setToken(
      JSON.parse(localStorage.getItem("account_infor")).accounts[0].tokens[0]
        .tokenSymbol
    );
    setTokens(
      JSON.parse(localStorage.getItem("account_infor")).accounts[0].tokens.map(
        (tkn) => tkn.tokenSymbol
      )
    );
  }, []);
  async function handleCreateUserOp() {
    const privKey = sha256.x2(mnemonic + sender.creationNonce);
    const signer = new ethers.Wallet(privKey, goerliProvider);
    const IAccount = new ethers.utils.Interface(Account);
    const callData = IAccount.encodeFunctionData("execute", [
      receiver,
      ethers.utils.parseEther(amount.toString()),
      "0x00",
    ]);
    let userOp;
    if ((await goerliProvider.getCode(sender.address)) == "0x") {
      userOp = await fillAndSign(
        {
          sender: sender.address,
          callData: callData,
          initCode: getAccountInitCode(sender.address),
        },
        signer
      );
    } else {
      userOp = await fillAndSign(
        {
          sender: sender.address,
          callData: callData,
        },
        signer
      );
    }
    console.log(userOp);
  }

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#111827",
        width: "40%",
        height: "60%",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "10px",
          paddingRight: "10px",
          width: "100%",
        }}
      >
        <IconButton onClick={handleClose}>
          <CancelIcon sx={{ color: "#FFF" }} />
        </IconButton>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}
      >
        New Transaction
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "#161E2D",
          width: "80%",
          borderRadius: "15px",
          marginTop: "30px",
          padding: "20px",
        }}
      >
        <Box fontWeight="600">Sender:</Box>
        <Box px={2} width="100%">
          <Button
            sx={{
              textTransform: "none",
              borderRadius: "15px",
              fontFamily: "inherit",
              color: "inherit",
              border: "2px solid #5C80BC",
              width: "100%",
              height: "50px",
            }}
            onClick={(e) => setSenderAnchorEl(e.currentTarget)}
          >
            <Box width="95%">
              {accounts == null ? (
                <>
                  <CircularProgress />
                </>
              ) : (
                <> {sender.address}</>
              )}
            </Box>
            <Box width="5%" display="flex" alignItems="center">
              <KeyboardArrowRightIcon />
            </Box>
          </Button>
          <Popover
            anchorEl={senderAnchorEl}
            sx={{
              ".MuiPopover-paper": {
                borderRadius: "15px",
              },
            }}
            open={Boolean(senderAnchorEl)}
            onClose={() => setSenderAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box
              sx={{
                border: "2px solid #5C80BC",
                bgcolor: "#192238",
                borderRadius: "15px",
                color: "#FFF",
                paddingX: "13px",
              }}
            >
              <MenuList>
                {accounts == null ? (
                  <>
                    <CircularProgress />
                  </>
                ) : (
                  accounts.map(
                    (item) =>
                      item.address !== sender.address && (
                        <MenuItem
                          sx={{
                            fontFamily: "Lexend Exa",
                            fontSize: "15px",
                            fontWeight: "500",
                            paddingY: "0px",
                          }}
                          onClick={() => setSender(item)}
                        >
                          <Box
                            display="flex"
                            justifyContent="flex-start"
                            width="100%"
                          >
                            {item.address}
                          </Box>
                        </MenuItem>
                      )
                  )
                )}
              </MenuList>
            </Box>
          </Popover>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "#161E2D",
          width: "80%",
          borderRadius: "15px",
          marginTop: "30px",
          padding: "20px",
        }}
      >
        <Box fontWeight="600">Receiver:</Box>
        <Box px={2} width="100%">
          <Input
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            disableUnderline
            color="#FFF"
            sx={{
              paddingLeft: "10px",
              height: "50px",
              color: "#FFF",
              fontFamily: "inherit",
              fontSize: "18px",
              fontWeight: "500",
              border: "2px solid #5C80BC",
              borderRadius: "15px",
              width: "100%",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#161E2D",
          width: "80%",
          borderRadius: "15px",
          marginTop: "30px",
          padding: "20px",
        }}
      >
        <Box sx={{ width: "30%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ fontWeight: "600" }}>Token</Box>
          <Box pt={2} width="100%">
            <Button
              sx={{
                borderRadius: "15px",
                fontFamily: "inherit",
                color: "inherit",
                border: "2px solid #5C80BC",
                width: "70%",
                height: "50px",
              }}
              onClick={(e) => setTokenAnchorEl(e.currentTarget)}
            >
              <Box width="80%">{token}</Box>
              <Box width="20%" display="flex" alignItems="center">
                <KeyboardArrowRightIcon />
              </Box>
            </Button>
            {tokens == null ? null : tokens.length > 1 ? (
              <Popover
                anchorEl={tokenAnchorEl}
                sx={{
                  ".MuiPopover-paper": {
                    borderRadius: "15px",
                  },
                }}
                open={Boolean(tokenAnchorEl)}
                onClose={() => setTokenAnchorEl(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box
                  sx={{
                    border: "2px solid #5C80BC",
                    bgcolor: "#192238",
                    borderRadius: "15px",
                    color: "#FFF",
                    paddingX: "20px",
                  }}
                >
                  <MenuList>
                    {tokens.map(
                      (token) =>
                        token.tokenSymbol !== token && (
                          <MenuItem
                            sx={{ fontFamily: "Lexend Exa" }}
                            onClick={() => setToken(token.tokenSymbol)}
                          >
                            {token.tokenSymbol}
                          </MenuItem>
                        )
                    )}
                  </MenuList>
                </Box>
              </Popover>
            ) : null}
          </Box>
        </Box>
        <Box sx={{ width: "70%", display: "flex", flexDirection: "column" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ fontWeight: "600" }}
          >
            <Box>Amount</Box>
            <Box>{/* Your balance : {getBalance()} {token} */}</Box>
          </Box>
          <Box pt={2}>
            <Input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              disableUnderline
              color="#FFF"
              sx={{
                paddingLeft: "10px",
                height: "50px",
                color: "#FFF",
                fontFamily: "inherit",
                fontSize: "18px",
                fontWeight: "500",
                border: "2px solid #5C80BC",
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
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    sx={{
                      width: "5%",
                      fontSize: "10px",
                      fontWeight: "600",
                      textTransform: "none",
                      color: "#FFF",
                      border: "1px solid #5C80BC",
                      borderRadius: "10px",
                      fontFamily: "inherit",
                      marginRight: "5px",
                    }}
                    onClick={() => setAmount(getBalance())}
                  >
                    MAX
                  </Button>
                </InputAdornment>
              }
            />
          </Box>
        </Box>
      </Box>
      <Box width="90%" display="flex" justifyContent="flex-end" py={3}>
        <Button
          sx={{
            width: "20%",
            fontSize: "15px",
            fontWeight: "600",
            textTransform: "none",
            color: "#FFF",
            border: "1px solid #5C80BC",
            borderRadius: "10px",
            fontFamily: "inherit",
          }}
          onClick={() => handleCreateUserOp()}
        >
          Finish
        </Button>
      </Box>
    </Box>
  );
}

export default CreateTransactionModal;
