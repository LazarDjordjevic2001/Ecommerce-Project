import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor="rgba(139, 139, 139, 0.8)">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb="30px"
            color="black"
          >
            KOTA
          </Typography>
          <div>
          KOTA nudi širok spektar odeće, uključujući mušku, žensku i dečju odeću, obuću, i modne dodatke. 
          Njihova ponuda uključuje sve od svakodnevne odeće do večernjih haljina, sportske opreme i luksuznih komada.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            Krusevac, Serbia
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: ldjordjevic2001@gmail.com
          </Typography>
          <Typography mb="30px">Phone number: +38164/41-44-250</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;