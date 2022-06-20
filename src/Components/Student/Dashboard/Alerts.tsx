/* eslint-disable prettier/prettier */
import { Alert, Paper } from '@mui/material';
import React from 'react';
import aloud from '../../../../public/aloud.png';
import Image from 'next/image';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const Alerts = () => {
  
  return (
    <div>
      <Alert
        severity="success"
        // className={classes.alrt}
        sx={{ bgcolor: `#dcede7`, margin: `1em` }}
        icon={false}
      >
        <Paper
          sx={{
            display: `flex`,
            justifyContent: `space-evenly`,
            alignItems: `center`,
            background: `linear-gradient(45deg, #17a667 10%, #0a8782 90%)`,
            padding: `0.8rem`,
            color: `#fff`,
            width: `12.5rem`,
          }}
        >
          <Image src={aloud} alt="aloud" />
          <Typography
            fontFamily={`montserrat`}
            fontWeight={700}
            fontSize={`0.8125rem`}
          >
            Announcements
          </Typography>
          <Box>
            <Typography
              fontFamily={`montserrat`}
              fontWeight={700}
              fontSize={`0.5625rem`}
            >
              1/0
            </Typography>
          </Box>
        </Paper>
        {/* <> icons Here */}
      </Alert>
    </div>
  );
};

export default Alerts;
