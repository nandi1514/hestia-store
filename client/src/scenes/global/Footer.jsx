import React from "react";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%,40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            HESTIA'S STORE
          </Typography>
          <div>
            Hestia was the goddess of family, home and hearth, the eternal flame
            that would keep the family's home warm. The Ancients' houses had a
            sanctuary in the center of them. Hestia maintained the hearth fire of
            both Mount Olympus and the homes of the Greeks. This fire was
            important because it was used for cooking and for keeping the home
            warm. Hestia also helped to keep peace in the family and taught
            people how to build their homes.
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
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            6, Hestia Street, Hestia Lane, Greece -63088
          </Typography>
          <Typography mb="30px">
            Email: hestia.thegreekgoddess@gmail.com
          </Typography>
          <Typography mb="30px">+30 6666666666</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
