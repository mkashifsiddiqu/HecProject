/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import logo from '../../public/logo-white.png'
import { Paper, Typography, TextField, Button, Grid, Box, Link, styled } from '@mui/material';
import chrome from '../../public/Brower/chrome.svg'
import firefox from '../../public/Brower/firefox.svg'
import opera from '../../public/Brower/opera.svg'
import safari from '../../public/Brower/safari.svg'
import edge from '../../public/Brower/edge.svg'
import idCard from '../../public/ForgotPassword/dasid.png';
import email from '../../public/ForgotPassword/email.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import bg from '../../public/BackgroundImage/bg.jpg';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';
import GuestVerify from '@/Components/Student/Auth/GuestVerify';
const theme = createTheme({
  typography: {
    fontFamily: `montserrat`,
    fontSize: 12,

  }
});
const Login = () => {
  const router = useRouter();
  const [link, setLink] = React.useState(false);
  const [inputShow, setInputShow] = React.useState(false);
  const [valueCode, SetValueCode] = React.useState(`0`);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: `flex`, justifyContent: `space-around`, alignItems: `center`,
            backgroundImage: `url(${bg.src})`, backgroundSize: `100% 100%`, height: `100vh`,
          }}>
          <Box sx={{ display: `flex`, flexDirection: `column`,
                            alignItems: {lg:`flex-start`,md:`center`,sm:`center`,xs:`center`} 
                            }}>
                    <Image sx={{ marginBottom: `10px`, width: `20px`, height: `92px`, position: `fixed` }} src={logo} alt={`logo`} />
                    <Typography fontSize={`27px`} fontWeight={`600`} variant="h3" color="#fff" sx={{ mb: `6.5px` }}>Welcome To {<br />} Higher Education Commission</Typography>
                    <GuestVerify />
            </Box>
            <Box sx={{width:`430px`}}>
              {link == true &&
                <Paper sx={{ p: `30px 25px` }}>
                  <Box
                    onClick={() => { setLink(false) }}
                    display={`flex`} sx={{ color: `#1bb55e`, cursor: `pointer` }}>
                    <ArrowLeftIcon />
                    <motion.div
                      initial={{ x: 1 }}
                      whileHover={{ x: 10 }}
                      transition={{ type: `tween` }}
                    >Back</motion.div>
                  </Box>

                  <Box sx={{ mt: `12px` }}>
                    <Typography
                      variant={`h3`}
                      fontSize={`27px`}
                      fontWeight={`bold`}
                      textTransform={`capitalize`}
                    >
                      Did you forget your
                      <br />
                      password?
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      <Typography fontWeight={`600`} color={`#333333d9`}>
                        Enter your Email Address you&#8217;re using for your account
                        <br /> below and we will send you a verification code to reset
                        your
                        <br />
                        password
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 1, display: `flex`, justifyContent: `space-evenly` }}>
                    <Box
                      onClick={() => SetValueCode(`1`)}
                      sx={{
                        border: `1px solid gray`,
                        borderRadius: `3px`,
                        display: `flex`,
                        flexDirection: `column`,
                        justifyContent: `space-around`,
                        alignItems: `center`,
                        width: `150px`,
                        height: `136px`,
                        cursor: `pointer`,
                        '&:hover': {
                          background: `linear-gradient(to bottom,#cef5f3, #fff)`,
                        },
                      }}
                    >
                      <Box>
                        <Image
                          src={idCard}
                          alt={`Id Card`}
                          width={`35px`}
                          height={`25px`}
                        />
                      </Box>
                      <Box
                        display={`flex`}
                        alignItems={`center`}
                        flexDirection={`column`}
                      >
                        <Typography>CNIC</Typography>
                        <FiberManualRecordIcon
                          sx={{ color: `#02b266` }}
                          fontSize="large"
                        />
                      </Box>
                    </Box>
                    <Box
                      onClick={() => { SetValueCode(`2`) }}
                      sx={{
                        border: `1px solid gray`,
                        borderRadius: `3px`,
                        display: `flex`,
                        flexDirection: `column`,
                        justifyContent: `space-around`,
                        alignItems: `center`,
                        width: `150px`,
                        height: `136px`,
                        cursor: `pointer`,
                        '&:hover': {
                          background: `linear-gradient(to bottom,#cef5f3, #fff)`,
                        },
                      }}
                    >
                      <Box>
                        <Image
                          src={email}
                          alt={`Id Card`}
                          width={`35px`}
                          height={`25px`}
                        />
                      </Box>
                      <Box
                        display={`flex`}
                        alignItems={`center`}
                        flexDirection={`column`}
                      >
                        <Typography>EMAIL</Typography>
                        <FiberManualRecordIcon
                          sx={{ color: `#02b266` }}
                          fontSize="large"
                        />
                      </Box>

                    </Box>
                  </Box>
                  {valueCode == `1` &&
                    <Box sx={{ mt: `25px` }}>
                      <TextField
                        required
                        color='success'
                        helperText={`Please Enter CNIC without dashes e.g: 4123456222222`}
                        label={`CNIC/POC`}
                        InputLabelProps={{
                          style: { fontWeight: 700, fontSize: `14px`, fontFamily: `montserrat`, color: `#2e7d32` }
                        }
                        }
                        size="small"
                        fullWidth
                      />
                    </Box>}
                  {valueCode == `2` &&
                    <Box sx={{ mt: `25px` }}>
                      <TextField
                        required
                        color='success'
                        helperText={`Please Enter Email in correct format e.g: username@provider.com`}
                        label={`EMAIL`}
                        InputLabelProps={{
                          style: { fontWeight: 700, fontSize: `14px`, fontFamily: `montserrat`, color: `#2e7d32` }
                        }
                        }
                        size="small"
                        fullWidth
                      />
                    </Box>}
                  {valueCode > `0` && <>
                    <Box display={`flex`} justifyContent={`flex-end`}>
                      <Button
                        sx={{ mt: `25px`, backgroundColor: `#1bb55e`, '&:hover': { backgroundColor: `#1bb55e` } }}
                        variant='contained'
                        size='large'
                      >
                        GET VERIFICATION CODE
                      </Button>
                    </Box>
                    <Box display={`flex`} justifyContent={`center`} sx={{ mt: `25px` }}>
                      <Typography fontWeight={`600`}>Any Confusion?&nbsp;<Link href={`#`} underline='none' color={`#006E99`}>Download Manual</Link></Typography>
                    </Box>
                  </>}
                </Paper>
              }
              {link == false &&
                <Paper sx={{ p: `30px 25px` }}>
                  <Box sx={{ width: `400px`, height: `54px`, mb: `6.5px` }}>
                    <Typography
                      fontSize={`22px`}
                      sx={{ textTransform: `capitalize`, fontWeight: `700` }}
                    >
                      Sign in
                    </Typography>
                    <Typography
                      fontSize={`13px`}
                      color={`#333333D9`}
                      sx={{ textTransform: `capitalize`, fontWeight: `600` }}
                    >
                      Higher Education Commission - E Services Portal
                    </Typography>
                  </Box>
                  <Box sx={{ width: `400px`, mt: `12px` }}>
                    <TextField
                      color={`success`}
                      label={`CNIC/Passport/POC`}
                      helperText="Please Enter CNIC/Passport/POC"
                      sx={{ width: `382px`, height: `48px` }}
                      InputLabelProps={{ style: { fontWeight: 500, fontSize: `13px`, fontFamily: `montserrat`, color: `#2e7d32` } }}
                      size={`small`}
                      onKeyPress={() => { setInputShow(true) }}
                    ></TextField>
                    {inputShow == true &&
                      <TextField
                        color='success'
                        label={`Password`}
                        sx={{ width: `382px`, height: `48px`, mt: `20px` }}
                        size={`small`}
                        InputLabelProps={{ style: { fontWeight: 500, fontSize: `13px`, fontFamily: `montserrat`, color: `#2e7d32` } }}
                        helperText={`Please Enter Password`}
                      ></TextField>}
                    <Typography
                      onClick={() => { setLink(true) }}
                      fontSize={`13px`} sx={{ mt: `25px`, cursor: `pointer` }} fontWeight={`400`}>
                      FORGOT PASSWORD?
                    </Typography>
                    <Button
                      variant={`contained`}
                      onClick={() => router.push(`/Dashboard`)}
                      sx={{
                        width: `382px`,
                        height: `48px`,
                        mt: `12px`,
                        backgroundColor: `#1BB55E`,
                        '&:hover': { backgroundColor: `#1BB55E` },
                      }}
                  >
                      Sign in
                    </Button>
                    <Box sx={{ display: `flex`, justifyContent: `center`, mt: `12px` }}>
                      <Grid>
                        <Grid
                          item
                          sx={{ mt: `12px`, display: `flex`, justifyContent: `center` }}
                        >
                          <Typography fontWeight={`600`}>
                            Dont Have An Account Yet?&nbsp;&nbsp;&nbsp;
                            <Link href={`#`} underline={`none`} color={`#006e99`}>
                              Sign Up
                            </Link>
                          </Typography>
                        </Grid>
                        <Grid item sx={{ display: `flex`, justifyContent: `center` }}>
                          <Typography fontWeight={`600`}>
                            Need Help?&nbsp;
                            <Link href={`#`} underline={`none`} color={`#006e99`}>
                              Go To Online Help
                            </Link>
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          sx={{ mt: `12px`, display: `flex`, justifyContent: `center` }}
                        >
                          <Link href={`#`} underline={`none`}>
                            <Typography fontWeight={`600`} color={`#006e99`}>
                              Download HEC Mobile Application
                            </Typography>
                          </Link>
                        </Grid>
                        <Grid
                          item
                          sx={{ mt: `12px`, display: `flex`, justifyContent: `center` }}
                        >
                          <Typography fontWeight={`600`} color={`#006e99`}>
                            BEST VIEWED ON&nbsp;
                          </Typography>
                          &nbsp;
                          <Image
                            src={chrome}
                            alt={`chrome`}
                            width={`15px`}
                            height={`15px`}
                          />
                          &nbsp;
                          <Image
                            src={firefox}
                            alt={`chrome`}
                            width={`15px`}
                            height={`15px`}
                          />
                          &nbsp;
                          <Image
                            src={safari}
                            alt={`chrome`}
                            width={`15px`}
                            height={`15px`}
                          />
                          &nbsp;
                          <Image
                            src={opera}
                            alt={`chrome`}
                            width={`15px`}
                            height={`15px`}
                          />
                          &nbsp;
                          <Image
                            src={edge}
                            alt={`chrome`}
                            width={`15px`}
                            height={`15px`}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Paper>}
            </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Login