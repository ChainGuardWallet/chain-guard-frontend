import { Box, Button, Popper, Grow, MenuItem, MenuList } from "@mui/material";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import * as React from "react";

function MainLayout({ childComponent }) {
  const [networkPopper, setNetworkPopper] = useState(false);
  const networks = ["Ethereum", "BSC", "Fantom", "Polygon"];
  const [network, setNetwork] = useState(networks[0]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggle = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setNetworkPopper((prevOpen) => !prevOpen);
  };

  return (
    <Box px={4} pt={1} width="100%" display="flex" flexDirection="column">
      <Box display="flex" justifyContent="flex-end">
        <Box
          display="flex"
          justifyContent="center"
          p={1}
          mr={2}
          border="2px solid #FFF"
          borderRadius="25px"
        >
          <LocalGasStationRoundedIcon /> 0.01$
        </Box>
        <Box>
          <Button
            sx={{
              width: "140px",
              border: "2px solid #5C80BC",
              // bgcolor: "#083D77",
              borderRadius: "25px",
              textTransform: "none",
              color: "#FFF",
              paddingX: "10px",
              fontFamily: "inherit",
            }}
            onClick={handleToggle}
          >
            {network}
            <ArrowDropDownIcon />
          </Button>
          <Popper open={networkPopper} anchorEl={anchorEl}>
            <Grow in={true}>
              <Box
                sx={{
                  border: "2px solid #5C80BC",
                  bgcolor: "#192238",
                  borderRadius: "10px",
                  paddingX: "5px",
                  fontFamily: "inherit",
                }}
              >
                <MenuList>
                  {networks.map(
                    (item) =>
                      item !== network && (
                        <MenuItem
                          sx={{ fontFamily: "inherit" }}
                          onClick={() => setNetwork(item)}
                        >
                          {item}
                        </MenuItem>
                      )
                  )}
                </MenuList>
              </Box>
            </Grow>
          </Popper>
        </Box>
      </Box>

      <Box
        p={4}
        borderRadius="15px"
        bgcolor="#111827"
        sx={{ marginTop: "100px" }}
      >
        {childComponent}
      </Box>
    </Box>
  );
}

export default MainLayout;
