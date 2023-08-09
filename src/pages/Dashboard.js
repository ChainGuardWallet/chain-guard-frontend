import { Box, Button, Modal, CircularProgress } from "@mui/material";
import Account from "../components/Accounts";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CreateTransactionModal from "../components/modal/CreateTransactionModal";
import { useState, useContext, useEffect } from "react";
import { AccountContext } from "../Router";
import { ethers } from "ethers";
import sha256 from "sha256";
import { getDeployedAddress } from "../utils/user-operation/UserOp";
import { goerliProvider } from "../utils/user-operation/utils";
import ERC20 from "../abis/ERC20.json";
import { resolve } from "url";

function Dashboard() {
  const { mnemonic } = useContext(AccountContext);
  const [accountsInfo, setAccountsInfo] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleNewTx = () => {
    setOpenModal(true);
  };

  async function handleAddAccount() {
    const currentNonce =
      JSON.parse(localStorage.getItem("account_infor")).currentNonce + 1;
    const ownerPrivKey = sha256.x2(mnemonic + currentNonce);
    const ownerAddress = ethers.utils.computeAddress("0x" + ownerPrivKey);
    const accountAddress = await getDeployedAddress(
      ownerAddress,
      "0x".padEnd(66, "0")
    );
    const account = {
      owner: ownerAddress,
      creationNonce: currentNonce,
      address: accountAddress,
      tokens: [],
      nameTag: `Account #${currentNonce + 1}`,
    };
    console.log(account);
    const accountHandler = new Promise((resolve, reject) => {
      resolve();
    });
    accountHandler
      .then(() =>
        localStorage.setItem(
          "account_infor",
          JSON.stringify({
            accounts: [...accountsInfo, account],
            currentNonce: currentNonce,
          })
        )
      )
      .then(() => setAccountsInfo([...accountsInfo, account]));
  }

  useEffect(() => {
    async function getBalances() {
      let accounts = JSON.parse(localStorage.getItem("account_infor")).accounts;
      // accounts.forEach(async (acc) => {
      //   if (acc.tokens.length != 0) {
      //     return {
      //       ...acc,
      //       tokens: acc.tokens.map(async (tkn) => {
      //         let tknContract = new ethers.Contract(tkn, ERC20, goerliProvider);
      //         let tknSymbol = await tknContract.symbol();
      //         let tknDecimal = (await tknContract.decimals()).toNumber();
      //         let tknBalance = (await tknContract.balanaceOf(acc.address)).div(
      //           ethers.utils.parseUnits("1", tknDecimal - 3).toNumber() / 1000
      //         );
      //         return {
      //           tokenSymbol: tknSymbol,
      //           tokenBalance: tknBalance,
      //           tokenDecimal: tknDecimal,
      //         };
      //       }),
      //     };
      //   } else
      //     return {
      //       ...acc,
      //       tokens: acc.tokens.push({
      //         tokenSymbol: "ETH",
      //         tokenBalance:
      //           (await goerliProvider.getBalance(acc.address))
      //             .div(ethers.utils.parseUnits("1", 15))
      //             .toNumber() / 1000,
      //         tokenDecimal: 18,
      //       }),
      //     };
      // });
      setAccountsInfo(accounts);
      setIsLoading(false);
    }
    getBalances();
  }, []);

  return mnemonic == null ? (
    "No account found"
  ) : (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "15px",
        }}
      >
        <Box width="26%" display="flex" justifyContent="space-between">
          <Button
            sx={{
              bgcolor: "#0077B6",
              padding: "10px",
              borderRadius: "10px",
              textTransform: "none",
              fontFamily: "inherit",
              color: "inherit",
              "&:hover": {
                bgcolor: "#0077B6",
              },
            }}
            onClick={async () => await handleAddAccount()}
          >
            <AddBoxIcon sx={{ marginRight: "5px" }} />
            New Account
          </Button>
          <Button
            sx={{
              bgcolor: "#0077B6",
              padding: "10px",
              borderRadius: "10px",
              textTransform: "none",
              fontFamily: "inherit",
              color: "inherit",
              "&:hover": {
                bgcolor: "#0077B6",
              },
            }}
            onClick={handleNewTx}
          >
            <AddBoxIcon sx={{ marginRight: "5px" }} />
            New Transaction
          </Button>
        </Box>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <CreateTransactionModal
            accountsInfo={accountsInfo}
            handleClose={() => setOpenModal(false)}
          />
        </Modal>
      </Box>

      {isLoading ? (
        <>
          <CircularProgress />
        </>
      ) : (
        accountsInfo.map((item) => {
          return (
            <Account
              nameTag={item.nameTag}
              owner={item.owner}
              address={item.address}
              balance="0"
              tokens={item.tokens}
            />
          );
        })
      )}
    </Box>
  );
}

export default Dashboard;
