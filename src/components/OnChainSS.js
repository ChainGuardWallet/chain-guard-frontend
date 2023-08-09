import { Box, Input, Button } from "@mui/material";

function OnChainSS() {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#468faf",
            width: "95%",
            borderRadius: "15px",
            marginTop: "30px",
            padding: "20px",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Box color="#DEE2E6" fontWeight="600">
              Guardian Manager address:
            </Box>
            <Box px={2} width="70%">
              <Input
                disableUnderline
                color="#FFF"
                sx={{
                  paddingLeft: "10px",
                  height: "50px",
                  color: "#DEE2E6",
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: "500",
                  border: "2px solid #DEE2E6",
                  borderRadius: "15px",
                  width: "100%",
                }}
              />
            </Box>
          </Box>
          <Box
            pt={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Box color="#DEE2E6" fontWeight="600">
              Guardian Executor address:
            </Box>
            <Box px={2} width="70%">
              <Input
                disableUnderline
                color="#FFF"
                sx={{
                  paddingLeft: "10px",
                  height: "50px",
                  color: "#DEE2E6",
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: "500",
                  border: "2px solid #DEE2E6",
                  borderRadius: "15px",
                  width: "100%",
                }}
              />
            </Box>
          </Box>
          <Box
            pt={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Box display="flex" alignItems="center" width="45%">
              <Box color="#DEE2E6" fontWeight="600">
                Number of guardian:
              </Box>
              <Box px={2} width="60%">
                <Input
                  disableUnderline
                  color="#FFF"
                  sx={{
                    paddingLeft: "10px",
                    height: "50px",
                    color: "#DEE2E6",
                    fontFamily: "inherit",
                    fontSize: "18px",
                    fontWeight: "500",
                    border: "2px solid #DEE2E6",
                    borderRadius: "15px",
                    width: "100%",
                  }}
                />
              </Box>
            </Box>
            <Box display="flex" alignItems="center" width="45%">
              <Box color="#DEE2E6" fontWeight="600">
                Recovery threshold:
              </Box>
              <Box px={2} width="62%">
                <Input
                  disableUnderline
                  color="#FFF"
                  sx={{
                    paddingLeft: "10px",
                    height: "50px",
                    color: "#DEE2E6",
                    fontFamily: "inherit",
                    fontSize: "18px",
                    fontWeight: "500",
                    border: "2px solid #DEE2E6",
                    borderRadius: "15px",
                    width: "100%",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            width="100%"
            pr={3}
            pt={3}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                textTransform: "none",
                border: "1px solid #DEE2E6",
                borderRadius: "15px",
                fontFamily: "inherit",
                paddingX: "20px",
                color: "#DEE2E6",
              }}
            >
              Generate
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default OnChainSS;
