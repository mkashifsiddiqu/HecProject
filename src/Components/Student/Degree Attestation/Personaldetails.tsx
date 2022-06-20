/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Image from 'next/image';
import Nationalitytable from './Personaldetails/Nationalitytable';
import { createTheme, ThemeProvider } from '@mui/material';
import single from '../../../../public/martial/single.svg';
import married from '../../../../public/martial/married.svg';
import male from '../../../../public/Gender/male.svg';
import female from '../../../../public/Gender/female.svg';
const theme = createTheme({
  typography: {
    fontFamily: `montserrat`,
    fontSize: 12,
    fontWeightRegular: 500,
  },
});
const useStyles = makeStyles({
  main: {
    margin: `7em 2em 0 6em`,
  },
  paper: {
    padding: `1.5em`,
  },
  referencetext: {
    fontFamily: `montserrat`,
    fontSize: `0.8125rem`,
    color: `#138e5d`,
    fontWeight: `600`,
  },
  chip: {
    backgroundColor: `#84dcff`,
    fontFamily: `montserrat`,
    padding: `0.5em 0.2em`,
    fontWeight: `500`,
    color: `#0491ca`,
    cursor: `pointer`,
    '&:hover': {
      backgroundColor: `#41a7fa`,
      color: `#fff`,
    },
    fontSize: `0.65rem`,
    borderRadius: `10%`,
    p: 2,
    boxShadow: `0px 1px 2px grey`,
  },
  personalinfo: {
    fontFamily: `montserrat`,
    fontSize: `0.975rem`,
    color: `#48465b`,
    fontWeight: `bold`,
  },
  box: {
    margin: `1.5em 0 `,
  },
  ltext: {
    fontFamily: `monstserrat`,
    fontSize: `12px`,
  },
  t: {
    fontFamily: `montserrat`,
    fontSize: `0.8rem`,
    fontWeight: `500`,
  },
  tarea: {
    width: `1900px`,
  },
  BGB: {
    backgroundColor: `white`,
    color: `#8A8A8A`,
    fontFamily: `montserrat`,
    padding: `0.6250em 1.875em`,
    '&:hover': {
      backgroundColor: `#8A8A8A`,
      color: `#fff`,
    },
  },

  BSF: {
    backgroundColor: `#1bb55e`,
    fontFamily: `montserrat`,
    padding: `0.6250em 1.875em`,
  },
  Btnhelp: {
    color: `#23A75C`,
    textTransform: `capitalize`,
    fontWeight: `500`,
    fontSize: `14px`,
    margin: `5px`,
    '&:hover': { backgroundColor: `transparent`, mt: `2px` },
  },
});
const Personaldetails = () => {
  const classes = useStyles();
  const titleList = [`Mr.`, `Dr.`, `Ms.`, `Engr.`];
  return (
    <div>
      {/* Personal Info */}
      <ThemeProvider theme={theme}>
        <Box>
          <Typography className={classes.personalinfo}>
            Perosnal Info
          </Typography>
          <Divider></Divider>
          <Box className={classes.box}>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <TextField
                  className={classes.ltext}
                  select
                  color="success"
                  label={`Title`}
                  helperText="Please select title"
                  size="small"
                  fullWidth
                >
                  {titleList.map((item) => (
                    <MenuItem value={item} sx={{ fontSize: `12px` }}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  required
                  color="success"
                  label={`First Name`}
                  helperText="Please enter first name"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  color="success"
                  label={`Middile Name`}
                  helperText="Please enter middle name"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  required
                  color="success"
                  label={`Last Name`}
                  helperText="Please enter last name"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Martial Status
                  </FormLabel>
                  <RadioGroup
                    color="success"
                    row
                    sx={{ m: `10px` }}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="single"
                      control={
                        <Radio
                          color="success"
                          checked={false}
                          sx={{ border: `1px solid gray`, borderRadius: `5px` }}
                          icon={
                            <Image
                              src={single}
                              alt="single"
                              width={`15px`}
                              height={`15px`}
                            />
                          }
                        />
                      }
                      label="Single"
                    />
                    <FormControlLabel
                      value="married"
                      control={
                        <Radio
                          color="success"
                          checked={false}
                          sx={{ border: `1px solid gray`, borderRadius: `5px` }}
                          icon={
                            <Image
                              src={married}
                              alt="married"
                              width="15px"
                              height="15px"
                            />
                          }
                        />
                      }
                      label="Married"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item md={4} xs={12}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    color="success"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Male"
                      control={
                        <Radio
                          color="success"
                          checked={false}
                          sx={{ border: `1px solid gray`, borderRadius: `5px` }}
                          icon={
                            <Image
                              src={male}
                              alt="married"
                              width="15px"
                              height="15px"
                            />
                          }
                        />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      control={
                        <Radio
                          color="success"
                          checked={false}
                          sx={{ border: `1px solid gray`, borderRadius: `5px` }}
                          icon={
                            <Image
                              src={female}
                              alt="married"
                              width="15px"
                              height="15px"
                            />
                          }
                        />
                      }
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={
                        <Radio
                          color="success"
                          checked={false}
                          sx={{ border: `1px solid gray`, borderRadius: `5px` }}
                          icon={
                            <Image
                              src={married}
                              alt="married"
                              width="15px"
                              height="15px"
                            />
                          }
                        />
                      }
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  required
                  color="success"
                  label={`Date of Birth`}
                  helperText="Please select date of birth"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  required
                  color="success"
                  label={`Father Name`}
                  helperText="Please enter father name"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* Contact Info */}
        <Box>
          <Typography className={classes.personalinfo}>Contact Info</Typography>
          <Divider></Divider>
          <Box className={classes.box}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  color="success"
                  label={`Address`}
                  helperText="Please enter address"
                  multiline
                  minRows={2}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  select
                  required
                  color="success"
                  label={`Country`}
                  helperText="Please select country"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  select
                  color="success"
                  label={`City`}
                  helperText="Please select city"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  select
                  color="success"
                  label={`District`}
                  required
                  helperText="Please select district"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  select
                  color="success"
                  label={`Porstal Code`}
                  helperText="Please select postal"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* Nationality Info */}
      </ThemeProvider>
      <Box>
        <Typography className={classes.personalinfo}>
          Nationality Info
        </Typography>
        <Divider></Divider>
        <Box className={classes.box}>
          <Nationalitytable></Nationalitytable>
        </Box>
      </Box>
    </div>
  );
};

export default Personaldetails;
