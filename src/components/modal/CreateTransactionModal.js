import {
  Box,
  Button,
  Input,
  InputAdornment,
  IconButton,
  MenuList,
  MenuItem,
  Popover,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";

function CreateTransactionModal({ handleClose }) {
  const [tks, setTks] = useState({ ETH: 0 });
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePopOver = () => {
    setAnchorEl(null);
  };
  const tokens = [
    {
      name: "ETH",
      address: "0x00000000",
    },
    {
      name: "USDC",
      address: "0x00000001",
    },
    {
      name: "USDT",
      address: "0x00000002",
    },
    {
      name: "WBTC",
      address: "0x00000003",
    },
  ];

  const [token, setToken] = useState(tokens[0].name);

  // const handleChange = (event) => {
  //   setToken(event.target.value);
  // };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#111827",
        width: "40%",
        height: "65%",
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
        <Box fontWeight="600">Receiver:</Box>
        <Box px={2} width="100%">
          <Input
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
              onClick={handleClick}
            >
              {token}
            </Button>
            <Popover
              anchorEl={anchorEl}
              sx={{
                ".MuiPopover-paper": {
                  borderRadius: "10px",
                },
              }}
              open={Boolean(anchorEl)}
              onClose={handleClosePopOver}
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
                  borderRadius: "10px",
                  color: "#FFF",
                  paddingX: "20px",
                }}
              >
                <MenuList>
                  {tokens.map(
                    (item) =>
                      item.name !== token && (
                        <MenuItem onClick={() => setToken(item.name)}>
                          {item.name}
                        </MenuItem>
                      )
                  )}
                </MenuList>
              </Box>
            </Popover>
          </Box>
        </Box>
        <Box sx={{ width: "70%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ fontWeight: "600" }}>Amount</Box>
          <Box pt={2}>
            <Input
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
                  >
                    MAX
                  </Button>
                </InputAdornment>
              }
            />
          </Box>
        </Box>
        <Box></Box>
      </Box>{" "}
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
        >
          Finish
        </Button>
      </Box>
    </Box>
  );
}

export default CreateTransactionModal;
