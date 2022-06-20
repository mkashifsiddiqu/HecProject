/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Box, Link, Typography } from '@mui/material';
import picture from '../../../../../public/userLogo.png'
import Image from 'next/image';
import person from '../../../../../public/prob.png'
import logout from '../../../../../public/logbtn.png'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router =useRouter()
  
  return (
    <>
    <div>
      <Button disableRipple onClick={handleClick} sx={{ textTransform: `none`, '&:hover': { backgroundColor: `transparent` } }}>
        <Typography display={`flex`} alignItems={`center`} fontFamily={`montserrat`} 
              fontWeight={600} fontSize={13} 
              color="#636177">
                Greetings, Student
                <Avatar sx={{ marginLeft: `0.55rem`,backgroundImage:`url(${picture.src})`,backgroundSize:`100% 100%`,backgroundRepeat:`no-repeat`}}>
                  A
                </Avatar>
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `basic-button`,
          style:{paddingTop:`0px`,paddingBottom:`0px`}
        }}
        
      >
        <Box display={`flex`} alignItems={`center`} onClick={handleClose} sx={{ padding: `25px 102px 30px 30px`, backgroundImage: `linear-gradient(45deg, #17a667 10%, #0a8782 90%)`}}>
          <Box border={1} borderColor="#fff" borderRadius={`2px`} margin='1' height={`60px`} width={`60px`} sx={{backgroundImage:`url(${picture.src})`,backgroundSize:`100% 100%`,backgroundRepeat:`no-repeat`}}>
            {/* <Image  height={`60px`} width={`60px`}  src={picture} alt="pic"></Image> */}
            </Box>
          <Box padding={`0 0 0 15px`}>
            <Typography fontFamily={`montserrat`} fontSize={15.6} fontWeight={900} color="#fff">Student</Typography>
            <Typography fontFamily={`montserrat`} fontSize={13} fontWeight={500} color="#fff">student@gmail.com</Typography>
          </Box>
        </Box>
        <MenuItem sx={{ padding: `8px 20px`, borderBottom: 1, borderColor: `divider` }} onClick={handleClose}>
          <Box display={`flex`} alignItems={`center`}>
            <Box marginRight={2}><Image src={person} alt="person"></Image></Box>
            <motion.div
              initial={{ x: 1 }}
              whileHover={{ x: 10 }}
              transition={{ type: `tween` }}
            >
              <Box>
                <Link useHref={`#`} onClick={() => router.push(`/Profile`)} sx={{ textDecoration: `none` }} passHref>
                  <Typography fontFamily={`montserrat`} fontSize={13} fontWeight={600} color="#6a6a6a">My Profile</Typography>
                  <Typography marginTop={1} fontFamily={`montserrat`} fontSize={12} fontWeight={500} color="#b1b1b1">Account settings and more</Typography>
                </Link>
              </Box>
            </motion.div>
          </Box>
        </MenuItem>
        <MenuItem sx={{ padding: `20.8px 19.5px` }} onClick={handleClose}>
          <Box display={`flex`} alignItems={`center`}>
            <Box marginRight={2}><Image src={logout} alt="logout"></Image></Box>
            <motion.div
              initial={{ x: 1 }}
              whileHover={{ x: 10 }}
              transition={{ type: `tween` }}
            >
            <Box onClick={() => router.push(`/Login`)}>
                <Typography fontFamily={`montserrat`} fontSize={13} fontWeight={600} color="#ff0000">Logout</Typography>
                <Typography fontFamily={`montserrat`} fontSize={13} fontWeight={500} color="#ff0000">Logout to Home Page</Typography>
              </Box>
            </motion.div>
          </Box>
        </MenuItem>
      </Menu>
    </div>
    </>
  );
}