/* eslint-disable prettier/prettier */
import Image from 'next/image';
import React from 'react';
import banner from '../../../../public/infobg.png';
import info from '../../../../public/infobefore.png';
import { Box, Typography } from '@mui/material';
const Banner = () => {
  const user = `Muhammad Abubakar`;
  const city = `Gujrat`;
  const country = `Pakistan`;
  const date = `Thursday, March 3, 2022`;
  return (
    <div>
      <Box
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          backgroundImage: `url(${banner.src})`,
          backgroundSize: `100% 100%`,
          margin: `1em`,
          color: `#fff`,
          padding: `0.5em`,
          borderRadius: `0.5rem`,
        }}
      >
        <Box padding={`1em`}>
          <Typography
            fontFamily={`montserrat`}
            fontWeight={500}
            fontSize={`0.9375rem`}
          >
            Welcome back!
          </Typography>
          <Typography
            fontFamily={`montserrat`}
            fontWeight={900}
            fontSize={`1.375rem`}
          >
            {user}
          </Typography>
          <Typography
            fontFamily={`montserrat`}
            fontWeight={500}
            fontSize={`0.8125rem`}
          >
            Last Login From : {city},{country}, at {date}{` `}
          </Typography>
        </Box>
        <Box>
          <Image src={info} alt="info" />
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
