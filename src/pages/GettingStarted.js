import { Box, Button, Input, InputAdornment, Paper } from "@mui/material";

function GettingStarted() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        width: "40%",
      }}
    >
      <Box pb={3}>Login to your wallet.</Box>
      <Box width="70%">
        <Input
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
            borderRadius: "25px",
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
                disableTouchRipple
                sx={{
                  borderRadius: "25px",
                  border: "2px solid #FFF",
                  padding: "10px",
                  paddingX: "24px",
                  margin: 0,
                  textTransform: "none",
                  fontFamily: "inherit",
                  color: "#FFF",
                }}
              >
                Login
              </Button>
            </InputAdornment>
          }
        />
      </Box>
      <Box
        children={<Paper />}
        my={5}
        sx={{
          background: "#FFF",
          height: "2px",
          width: "500px",
        }}
      />
      <Box>Don't have a wallet? Get started with ChainGuard now.</Box>
      <Box width="70%" pt={3}>
        <Button
          disableTouchRipple
          sx={{
            borderRadius: "25px",
            border: "2px solid #FFF",
            padding: "10px",
            paddingX: "24px",
            margin: 0,
            textTransform: "none",
            fontFamily: "inherit",
            color: "#FFF",
            width: "100%",
          }}
        >
          Create a Wallet
        </Button>
      </Box>
    </Box>
  );
}
export default GettingStarted;
