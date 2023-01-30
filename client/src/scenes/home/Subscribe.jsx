import React, { useState } from "react";
import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <Box width="80%" margin="80%" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe To Our NewsLetter</Typography>
      <Typography>
        and receive a $20 coupon for your first order when you checkout.
      </Typography>
      <Box
        p="2px 4px"
        m="15px 0"
        display="flex"
        alignItems="left"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
        <Typography sx={{ p: "10px", hover: { cursor: "pointer" } }}>
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
