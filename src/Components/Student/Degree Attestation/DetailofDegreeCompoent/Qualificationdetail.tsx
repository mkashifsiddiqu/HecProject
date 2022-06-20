/* eslint-disable prettier/prettier */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const useStyles = makeStyles({
  t: {
    fontFamily: `montserrat`,
    fontSize: `0.8rem`,
    fontWeight: `500`,
  },
  box: {
    margin: `1.5em 0`,
  },
  Accordian: {
    margin: `1em 0`,
    backgroundColor: `#f6f9fc`,
  },
});

export default function Qualificationdetail() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const state = {
    visible: true,
  };

  const classes = useStyles();
  return (
    <div>
      <Box sx={{ m: 4 }}>
        <Accordion
          className={classes.Accordian}
          expanded={expanded === `panel1`}
          onChange={handleChange(`panel1`)}
        >
          <AccordionSummary>
            <Box sx={{ display: `flex`, justifyContent: `space-between` }}>
              <Typography>Qualification Details</Typography>
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.box}>
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  select
                  color="success"
                  label={
                    <Typography className={classes.t}>
                      Qualification Level
                    </Typography>
                  }
                  helperText={
                    <Typography>Please select qualification level</Typography>
                  }
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <FormControlLabel
                  control={<Checkbox color="success"></Checkbox>}
                  label={<Typography>Incomplete Education</Typography>}
                ></FormControlLabel>
              </Grid>
              <Grid item md={3} xs={12}>
                <FormControlLabel
                  control={<Checkbox color="success"></Checkbox>}
                  label={<Typography>Currently Enrolled</Typography>}
                ></FormControlLabel>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  color="success"
                  label={
                    <Typography className={classes.t}>Start Date</Typography>
                  }
                  helperText={<Typography>Please select start date</Typography>}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  color="success"
                  label={
                    <Typography className={classes.t}>End Date</Typography>
                  }
                  helperText={<Typography>Please select end date</Typography>}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  color="success"
                  label={
                    <Typography className={classes.t}>
                      Name on Degree
                    </Typography>
                  }
                  helperText={
                    <Typography>
                      Please enter your exact name as written on degree
                    </Typography>
                  }
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </AccordionDetails>
          <Divider />
          <Box sx={{ display: `flex`, justifyContent: `flex-end` }}>
            <Button
              sx={{
                m: 1,
                backgroundColor: `transparent`,
                color: `#048753`,
                boxShadow: `1px 1px 3px gray`,
              }}
            >
              Cancel
            </Button>
            <Button
              sx={{
                m: 1,
                backgroundColor: `transparent`,
                color: `#048753`,
                boxShadow: `1px 1px 3px gray`,
              }}
            >
              Next
            </Button>
          </Box>
        </Accordion>
      </Box>
    </div>
  );
}
