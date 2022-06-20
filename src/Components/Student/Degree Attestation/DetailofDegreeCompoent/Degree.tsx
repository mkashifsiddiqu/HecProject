/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/system';
import Link from 'next/link';
import React from 'react';
const Degree = () => {
const [dataUni,setDataUni]= React.useState([`uog`,`uol`])

  return (
    <>
      <Box sx={{ m: 4 }}>
        <Accordion sx={{ margin: `1em 0`,backgroundColor: `#f6f9fc`,}}>
          <AccordionSummary>
            <Box sx={{display:`flex`,justifyContent:`space-between`}}>
              <Typography>
                Degree / Certificate Awarding Institute Details
              </Typography>
              <KeyboardArrowDownIcon/>
            </Box>
          </AccordionSummary>
          <Alert
            icon={<LightbulbIcon />}
            severity="warning"
            sx={{backgroundColor: `#fff4e5`,margin: `2.5em`,}}
          >
            If details of your campus/college/degree title are not available,
            please contact focal person of your University or lodge a complaint
            at <br />
            <Link
              href="https://onlinehelp.hec.gov.pk/"
              style={{color: `#3e3c76!important`}}
            >
              Onlinehelp.hec.gov.pk
            </Link>{` `}
            and select Pakistan Qualification Register(PQR) in Service tab. To
            check list of focal person,please Click here
            <br />
            Please{` `}
            <Link href="#" style={{color: `#3e3c76!important`}}>
              click here
            </Link>
          </Alert>
          <AccordionDetails sx={{margin: `1.5em 0`}}>
            
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item md={4} xs={12}>
              <TextField
                  select
                  color="success"
                  label={`Country`}
                  helperText={`Please select country`}
                  size="small"
                  fullWidth
                >
                  {dataUni.map((item) => (
                    <MenuItem value={item} key={item} sx={{ fontSize: `12px` }}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  select
                  color="success"
                  label={`City`}
                  helperText={`Please select city`}
                  size="small"
                  fullWidth
                >
                  {dataUni.map((item) => (
                    <MenuItem value={item} key={item} sx={{ fontSize: `12px` }}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  select
                  color="success"
                  label={`Degree Awarding Institute`}
                  helperText={`Please select degree awarding institute`}
                  size="small"
                  fullWidth
                >
                  {dataUni.map((item) => (
                    <MenuItem value={item} key={item} sx={{ fontSize: `12px` }}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  color="success"
                  label={`Program Title`}
                  helperText={
                    <Typography>Please enter program title</Typography>
                  }
                  size="small"
                  fullWidth
                >
                  {dataUni.map((item) => (
                    <MenuItem value={item} key={item} sx={{ fontSize: `12px` }}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  color="success"
                  label={`Campus`}
                  helperText={`Please enter campus`}
                  size="small"
                  fullWidth
                >
                  {dataUni.map((item) => (
                    <MenuItem value={item} key={item} sx={{ fontSize: `12px` }}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  color="success"
                  label={`Department`}
                  helperText={`Please enter department`}
                  size="small"
                  fullWidth
                >{dataUni.map((item) => (
                  <MenuItem value={item} key={item} sx={{ fontSize: `12px` }}>
                    {item}
                  </MenuItem>
                ))}</TextField>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  select
                  color="success"
                  label={` Degree Type`}
                  helperText={`Please select degree type`}
                  size="small"
                  fullWidth
                >
                  {dataUni.map((item) => (
                    <MenuItem value={item} key={item} sx={{ fontSize: `12px` }}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  select
                  color="success"
                  label={`Session Type`}
                  helperText={`Please select session type`}
                  size="small"
                  fullWidth
                >
                  {dataUni.map((item) => (
                    <MenuItem value={item} key={item} sx={{ fontSize: `12px` }}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  select
                  color="success"
                  label={`Major`}
                  helperText={`Please select major`}
                  size="small"
                  fullWidth
                >
                  {dataUni.map((item) => (
                    <MenuItem value={item} key={item} sx={{ fontSize: `12px` }}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  color="success"
                  label={`Area of Research`}
                  helperText={`Please enter area of research`}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  color="success"
                  label={`Registration/Roll Number`}
                  helperText={`Please enter registration/roll nummber`}
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
              Finished
            </Button>
          </Box>
        </Accordion>
      </Box>
    </>
  );
};

export default Degree;
