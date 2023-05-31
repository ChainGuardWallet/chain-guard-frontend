import { Box, Button, Modal } from "@mui/material";
import Account from "../components/Accounts";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CreateTransactionModal from "../components/modal/CreateTransactionModal";
import { useState } from "react";

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const handleNewTx = () => {
    setOpenModal(true);
  };

  const mockData = [
    {
      nameTag: "Account #1",
      owner: "0x242ed78bf0fe7672ff01ae6de558e45b3749f197",
      address: "0x2a26bca625b223971909dd88fc93faeb050dc5b3",
      balance: {
        USDT: 500000,
        USDC: 200000,
        ETH: 50,
        WBTC: 20,
      },
    },
    {
      nameTag: "Account #2",
      owner: "0xb3eC5Db932736D0203004FD7208b9b007d166B35",
      address: "0x2a26bca625b223971909dd88fc93faeb050dc5b3",
      balance: {
        USDT: 200000,
        USDC: 500000,
        ETH: 20,
        WBTC: 10,
      },
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "15px",
        }}
      >
        <Button
          sx={{
            bgcolor: "#416CB8",
            padding: "10px",
            borderRadius: "10px",
            textTransform: "none",
            fontFamily: "inherit",
            color: "inherit",
            "&:hover": {
              bgcolor: "#416CB8",
            },
          }}
          onClick={handleNewTx}
        >
          <AddBoxIcon sx={{ marginRight: "5px" }} />
          New Transaction
        </Button>
      </Box>

      {mockData.map((item) => (
        <Account
          nameTag={item.nameTag}
          owner={item.owner}
          address={item.address}
          balance={item.balance}
        />
      ))}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <CreateTransactionModal handleClose={() => setOpenModal(false)} />
      </Modal>
    </Box>
  );
}

export default Dashboard;
