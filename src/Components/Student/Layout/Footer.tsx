/* eslint-disable prettier/prettier */
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  
  return (
    <>
      <Paper
        elevation={0}
        sx={{ height: `5em`, width: `100%`, bottom: `0` }}
      >
        <Box sx={{ left: `4em` }}>
          <Typography
            fontFamily={`montserrat`}
            fontSize={13}
            fontWeight={400}
            sx={{ position: `absolute`, left: `112px`, top: `30px` }}
          >
            HEC Pakistan© 2022 All Rights Reserved.
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default Footer;
