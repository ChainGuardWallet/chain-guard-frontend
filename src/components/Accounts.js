import {
  Box,
  IconButton,
  Button,
  Popper,
  Grow,
  MenuList,
  MenuItem,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";

function Account({ nameTag, owner, address, balance }) {
  const tokens = ["USDT", "ETH", "USDC", "WBTC"];
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopper, setOpenPopper] = useState(false);
  const [token, setToken] = useState(tokens[0]);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpenPopper((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        borderRadius: "15px",
        bgcolor: "#192238",
        marginBottom: "3%",
        paddingX: "4%",
        paddingY: "2%",
      }}
    >
      <Box
        width={`${nameTag.length * 12}px`}
        border="1px solid #FFF"
        borderRadius="10px"
        display="flex"
        justifyContent="center"
        p={1}
        mb={1}
      >
        {nameTag}
      </Box>
      <Box my={1}>
        Owner: {owner}
        <IconButton
          sx={{ color: "#FFF", fontSize: "15px" }}
          onClick={() => navigator.clipboard.writeText(owner)}
        >
          <ContentCopyIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Box my={1}>
        Account's address: {address}
        <IconButton
          sx={{ color: "#FFF", fontSize: "15px" }}
          onClick={() => navigator.clipboard.writeText(owner)}
        >
          <ContentCopyIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Box my={1}>
        Balances: {balance[token]}
        <Button
          sx={{
            width: "90px",
            color: "inherit",
            border: "2px solid #5C80BC",
            borderRadius: "10px",
            marginLeft: "10px",
            paddingX: "10px",
          }}
          onClick={handleClick}
        >
          {token}
          <ArrowDropDownIcon />
        </Button>
        <Popper open={openPopper} anchorEl={anchorEl}>
          <Grow in={true}>
            <Box
              sx={{
                border: "2px solid #5C80BC",
                bgcolor: "#192238",
                borderRadius: "10px",
                paddingX: "5px",
              }}
            >
              <MenuList>
                {tokens.map(
                  (item) =>
                    item !== token && (
                      <MenuItem onClick={() => setToken(item)}>{item}</MenuItem>
                    )
                )}
              </MenuList>
            </Box>
          </Grow>
        </Popper>
      </Box>
    </Box>
  );
}

export default Account;
