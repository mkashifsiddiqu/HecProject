/* eslint-disable prettier/prettier */
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  StepLabel,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import UploadIcon from '@mui/icons-material/Upload';
import profile from '../../../../public/profiel.png';
import Image from 'next/image';
import { Step } from '@material-ui/core';
import headphone from '../../../../public/ohelp.svg';
import download from '../../../../public/downloadm.svg';
import { motion } from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const theme = createTheme({
  typography: {
    fontFamily: `montserrat`,
  },
});

const Faculty = () => {
  const [value, setValue] = React.useState<Date | null>(
    new Date(`2014-08-18T21:11:54`),
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box margin={`2em`}>
        <Divider></Divider>
        <Box>
          <Stepper sx={{ display: `flex`, justifyContent: `center` }}>
            <Step
              style={{
                width: `100%`,
                display: `flex`,
                justifyContent: `center`,
                fontFamily: `montserrat`,
                borderBottom: `solid`,
                borderBottomColor: `#0b6a90`,
                padding: `1.5em`,
              }}
            >
              <Image src={profile} alt="profile"></Image>
              <StepLabel icon={false}>
                <Typography
                  fontFamily={`montserrat`}
                  fontSize={`0.8rem`}
                  fontWeight={`700`}
                  margin={`0 0 0 1em`}
                  color={`#565759`}
                >
                  Faculty Form
                </Typography>
              </StepLabel>
            </Step>
          </Stepper>
        </Box>
        <Box
          sx={{ display: `flex`, justifyContent: `flex-end`, margin: `1em 0` }}
        >
          <motion.div whileHover={{ marginTop: -5 }}>
            <Button
              sx={{
                margin: `0 0 0 1em`,
                fontFamily: `Montserrat`,
                fontSize: `0.6875rem`,
                fontWeight: `bold`,
                color: `#1bb55e`,
              }}
              color="success"
              variant="outlined"
            >
              <Box margin={`0 0.5em 0 0`} height={`1.2em`} width={`1.2em`}>
                <Image src={headphone} alt="headphone"></Image>
              </Box>
              <Typography
                fontFamily={`montserrat`}
                fontSize={`0.6875rem`}
                fontWeight={700}
              >
                Online help
              </Typography>
            </Button>
          </motion.div>
          <motion.div whileHover={{ marginTop: -5 }}>
            <Button
              sx={{
                margin: `0 0 0 1em`,
                fontFamily: `Montserrat`,
                fontSize: `0.6875rem`,
                fontWeight: `bold`,
                color: `#1bb55e`,
              }}
              color="success"
              variant="outlined"
            >
              <Box margin={`0 0.5em 0 0`} height={`1.5em`} width={`1.2em`}>
                <Image src={download} alt="download"></Image>
              </Box>
              <Typography
                fontFamily={`montserrat`}
                fontSize={`0.6875rem`}
                fontWeight={700}
              >
                Download Manual
              </Typography>
            </Button>
          </motion.div>
        </Box>
      </Box>
      <ThemeProvider theme={theme}>
        <Paper sx={{ margin: `2em`, padding: `2em` }} elevation={0}>
          <Typography
            sx={{ color: `#48465b`, fontWeight: `bold`, marginBottom: `1em` }}
          >
            Perosnal Info
          </Typography>
          <Divider></Divider>
          <ThemeProvider theme={theme}>
            <Box margin={`1.5em 0`}>
              <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                  <TextField
                    required
                    color="success"
                    label={`Full Name`}
                    InputLabelProps={{
                      style: { fontWeight: 700, fontSize: `14px` },
                    }}
                    helperText="Please Enter Full Name"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    color="success"
                    helperText="Please Enter Father Name"
                    label={`Father Name`}
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                        color: `#666666`,
                      },
                    }}
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="success"
                          label="Date of Birth"
                          InputLabelProps={{
                            style: {
                              fontWeight: 700,
                              fontSize: `14px`,
                              fontFamily: `montserrat`,
                            },
                          }}
                          helperText="Please Select Your Date of Birth e.g 01/01/1980"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    select
                    color="success"
                    label="Gender"
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    color="success"
                    label="CNIC"
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    color="success"
                    label="Email"
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    color="success"
                    label="Contact No."
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
            <Typography
              sx={{ color: `#48465b`, fontWeight: `bold`, marginBottom: `1em` }}
            >
              Academic Details
            </Typography>
            <Divider></Divider>
            <Box margin={`1.5em 0`}>
              <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                  <TextField
                    required
                    select
                    color="success"
                    label="University Name"
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    helperText="Please select university name"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    required
                    color="success"
                    label="University Registration/Roll Number"
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    helperText="Please Enter registration/roll number"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    color="success"
                    label="Program Currently Enrolled"
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    helperText="Please Select Program Currently Enrolled"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    select
                    color="success"
                    label={`Discipline/Field of Study`}
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    helperText="Please Select Discipline/Field of Study"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    select
                    color="success"
                    label={`Degree/Qualification Level`}
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    helperText="Please Select Degree/Qualification Level"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    color="success"
                    label={`Department`}
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    helperText="Please Select First Department"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    color="success"
                    label={`Campus`}
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    helperText="Please Select Campus"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="success"
                          label={`Date of Joining`}
                          InputLabelProps={{
                            style: {
                              fontWeight: 700,
                              fontSize: `14px`,
                              fontFamily: `montserrat`,
                            },
                          }}
                          helperText="Please Select Your Date of Joining e.g 01/01/1980"
                          size="small"
                          fullWidth
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Box>
            <Typography
              sx={{ color: `#48465b`, fontWeight: `bold`, marginBottom: `1em` }}
            >
              Area of Interest
            </Typography>
            <Divider></Divider>
            <Box margin={`1.5em 0`}>
              <Grid container spacing={2}>
                <Grid item md={9} xs={12}>
                  <TextField
                    select
                    color="success"
                    label="Area of Interest"
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    helperText="Please Select Area of Interest"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>

            <Typography
              sx={{ color: `#48465b`, fontWeight: `bold`, marginBottom: `1em` }}
            >
              Payment Details
            </Typography>
            <Divider></Divider>
            <Box margin={`1.5em 0`}>
              <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                  <TextField
                    select
                    color="success"
                    label="Payment Source Name"
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    helperText="Please Enter First Name"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    color="success"
                    label="Receipt No. or Transaction ID"
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    helperText="Please Enter Your Transaction ID e.g 12340123412"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    color="success"
                    label="Date of Fee Submission"
                    InputLabelProps={{
                      style: {
                        fontWeight: 700,
                        fontSize: `14px`,
                        fontFamily: `montserrat`,
                      },
                    }}
                    helperText="Please Select Date of Fee Submission e.g 01/01/1980"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
          </ThemeProvider>
          <Box margin={`1em`}>
            <Typography
              fontFamily={`montserrat`}
              fontSize={`1.2rem`}
              color={`#48465b`}
              fontWeight={`700`}
              marginBottom={`1em`}
            >
              Documents
            </Typography>
            <Divider></Divider>
            <Box>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <DoDisturbIcon color="error"></DoDisturbIcon>
                    </TableCell>
                    <TableCell>
                      <Box display={`flex`}>
                        <Typography
                          fontSize={`13px`}
                          fontWeight={500}
                          color={`#212529`}
                        >
                          Bank Fee Receipt
                        </Typography>
                        <Typography color={`red`} marginLeft={`2px`}>
                          *
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <UploadIcon></UploadIcon>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ bgcolor: `#f4f9fc` }}>
                    <TableCell>
                      <DoDisturbIcon color="error"></DoDisturbIcon>
                    </TableCell>
                    <TableCell>
                      <Box display={`flex`}>
                        <Typography
                          fontSize={`13px`}
                          fontWeight={500}
                          color={`#212529`}
                        >
                          Transcript/Detailed Marksheet
                        </Typography>
                        <Typography color={`red`} marginLeft={`2px`}>
                          *
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <UploadIcon></UploadIcon>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>
          <FormGroup sx={{ margin: `1em 0` }}>
            <FormControlLabel
              control={<Checkbox color="success"></Checkbox>}
              label="I agree to these terms and conditions"
            ></FormControlLabel>
          </FormGroup>

          <Box sx={{ display: `flex`, justifyContent: `space-between` }}>
            <Button
              sx={{
                backgroundColor: `white`,
                color: `#8A8A8A`,
                fontFamily: `montserrat`,
                padding: `0.6250em 1.875em`,
                '&:hover': {
                  backgroundColor: `#8A8A8A`,
                  color: `#fff`,
                },
              }}
              variant="contained"
            >
              GO BACK
            </Button>
            <Button
              sx={{
                backgroundColor: `#1bb55e`,
                fontFamily: `montserrat`,
                padding: `0.6250em 1.875em`,
              }}
              variant="contained"
              color="success"
            >
              SUBMIT FORM
            </Button>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  );
};
export default Faculty;
