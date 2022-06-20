/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
import { Alert, Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { makeStyles } from '@mui/styles';
import Qualificationdetail from './DetailofDegreeCompoent/Qualificationdetail';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DegreeCard from './DetailofDegreeCompoent/DegreeCard/DegreeCard';
import Degree from './DetailofDegreeCompoent/Degree';
const useStyles = makeStyles({
  myalert: {
    backgroundColor: `#fff4e5`,
    margin: `1em`,
  },
  myalertLink: {
    color: `#3e3c76!important`,
  },
});
const Detailofdegree = () => {
  const [showAcco, seShowAcco] = React.useState(false);
  const classes = useStyles();
  const handleClick = () => {
    seShowAcco(true);
  };
  return (
    <div>
      {/* Simple Alert */}
      <Box sx={{ m: 2 }}>
        <Alert
          icon={<LightbulbIcon />}
          severity="warning"
          className={classes.myalert}
        >
          This page shows details of only those qualification(s) which are
          attested by HEC. To view your other qualification(s),which were saved
          at eportal.hec.gov.pk,
          <br />
          Please{` `}
          <a href="#" className={classes.myalertLink}>
            click here
          </a>
        </Alert>
      </Box>
      <Divider variant="middle" sx={{ ml: 4, mr: 4 }} />
      <Box sx={{ m: 2 }}>
        <Alert
          icon={<ReportProblemIcon />}
          severity="warning"
          className={classes.myalert}
        >
          You have currently enrolled Bachelor (16 Years) Degree, please update
          your Bachelor (16 Years) Degree if <br />
          completed or you want to add another currently enrolled education
        </Alert>
      </Box>
      {/* Show when click on Button */}
      {showAcco && <Qualificationdetail />}
      {showAcco && 
        <Box sx={{ mb: 2 }}>
           <Degree/>
          <Divider variant="middle" sx={{ ml: 4, mr: 4 }} />
        </Box>
      }
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          ml: 4,
          backgroundColor: `#018651`,
          color: `#fff`,
          fontFamily: `montserrat`,
          padding: `0.6250em 1.875em`,
          '&:hover': {
            backgroundColor: `white`,
            color: `#8A8A8A`,
          },
        }}
      >
        Add Detail of Degree
      </Button>
      {/* Card of Added Degree */}
      <Box>
        <Typography sx={{ pl: 4, m: 4, borderLeft: `4px solid #018651` }}>
          Please enter details of degree(s) which you want to get attested
        </Typography>
      </Box>
      <Box sx={{ pl: 3, m: 1 }}>
        <DegreeCard />
      </Box>
      <Box>
        <Typography sx={{ pl: 4, m: 4, borderLeft: `4px solid #018651` }}>
          Please{` `}
          <a href="#" onClick={handleClick}>
            <u>click here</u>
          </a>{` `}
          to add details of another degree
        </Typography>
      </Box>
    </div>
  );
};
export default Detailofdegree;
