import {
  Box,
  IconButton,
  Button,
  MenuList,
  MenuItem,
  Popover,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useState } from "react";

function Account({ nameTag, owner, address, tokens }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [symbols, setSymbols] = useState(null);
  const [token, setToken] = useState(null);
  const handleClosePopOver = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        borderRadius: "15px",
        bgcolor: "#468faf",
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
        {address[0] == "0" ? (
          <IconButton
            sx={{ color: "#FFF", fontSize: "15px" }}
            onClick={() => navigator.clipboard.writeText(owner)}
          >
            <ContentCopyIcon fontSize="inherit" />
          </IconButton>
        ) : null}
      </Box>
      {/* <Box my={1}>
        Balances:
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
              paddingX: "3px",
            }}
          >
            <MenuList>
              {tokens.length == 1
                ? null
                : tokens.map(
                    (item) =>
                      item !== token && (
                        <MenuItem onClick={() => setToken(item)}>
                          {item}
                        </MenuItem>
                      )
                  )}
            </MenuList>
          </Box>
        </Popover>
      </Box> */}
    </Box>
  );
}

export default Account;
