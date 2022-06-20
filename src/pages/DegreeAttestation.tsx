/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import AttestationDetails from '../Components/Student/Degree Attestation/AttestationDetails';
import DocumentUpload from '../Components/Student/Degree Attestation/DocumentUpload';
import Personaldetails from '../Components/Student/Degree Attestation/Personaldetails';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Chip, Divider, Grid, Paper, StepIconProps, StepLabel } from '@mui/material'
import Detailofdegree from '../Components/Student/Degree Attestation/Detailofdegree'
import { motion } from 'framer-motion'
import { makeStyles } from '@mui/styles';
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
//icon
import download from '../../public/InstructionIcon/downloadm.svg'
import Instructions from '../../public/InstructionIcon/instructions.svg';
import Ohelp from '../../public/InstructionIcon/ohelp.svg'
import user from '../../public/StepperICon/profiel.png'
import education from '../../public/StepperICon/education.png'
import vDetail from '../../public/StepperICon/vdetails.png'
import uDetail from '../../public/StepperICon/atdetails.png'
import doc from '../../public/StepperICon/docup.png'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import VerifyDetails from '../Components/Student/Degree Attestation/VerifyDetails'
const useStyles = makeStyles({
  paper: {
    padding: "1.5em"
  },
  referencetext: {
    fontFamily: "montserrat",
    fontSize: "0.8125rem",
    color: "#138e5d",
    fontWeight: "600"
  },
  chip: {
    backgroundColor: "#84dcff",
    fontFamily: "montserrat",
    padding: "0.5em 0.2em",
    fontWeight: "500",
    color: "#0491ca",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: "#41a7fa",
      color: "#fff"
    },
    fontSize: "0.65rem",
    borderRadius: '10%',
    p: 2,
    boxShadow: '0px 1px 2px grey'

  },
  personalinfo: {
    fontFamily: "montserrat",
    fontSize: "0.975rem",
    color: "#48465b",
    fontWeight: "bold"
  },
  box: {
    margin: "1.5em 0 "
  },
  ltext: {
    fontFamily: "monstserrat",
    fontSize: '12px'
  },
  t: {
    fontFamily: "montserrat",
    fontSize: "0.8rem",
    fontWeight: "500"
  },
  tarea: {
    width: "1900px",
  },
  BGB: {
    backgroundColor: "white",
    color: "#8A8A8A",
    fontFamily: "montserrat",
    padding: "0.6250em 1.875em",
    '&:hover': {
      backgroundColor: "#8A8A8A",
      color: "#fff"
    },
  },

  BSF: {
    backgroundColor: "#1bb55e",
    fontFamily: "montserrat",
    padding: "0.6250em 1.875em"
  },
  Btnhelp: {
    color: '#23A75C', textTransform: 'capitalize',
    fontWeight: '500', fontSize: '14px',
    margin: '5px',
    '&:hover': { backgroundColor: 'transparent', mt: '2px' }
  },
  BSC: {
    margin: "0 1em",
    backgroundColor: "white",
    color: "#1197cd",
    fontFamily: "montserrat",
    padding: "0.6250em 1.875em",
    '&:hover': {
      backgroundColor: "#1197cd",
      color: "#fff"
    }
  },
  tab_4btn: {
    m: 1, backgroundColor: 'transparent', color: '#048753', boxShadow: '1px 1px 3px gray',
    textTransform: 'capitalize',
    fontWeight: '800',
    '&:hover': {
      backgroundColor: "#f4f4f4",

    }
  }

})
// All Custome Icon In Stepper
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
  const icons = {
    1: <Image src={user} alt='user' />,
    2: <Image src={education} alt='education' />,
    3: <Image src={uDetail} alt='uDetail' />,
    4: <Image src={doc} alt='uDetail' />,
    5: <Image src={vDetail} alt='uDetail' />
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[(props.icon)]}
    </ColorlibStepIconRoot>
  );
}
ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

//********************************************End Here Custom Icon */
const steps = ['1- Personaldetails', '2- Detail of Degree(s)', '3- Attestation Details', '4- Document Upload', '5- Verify Details'];
const DegreeAttestation = () => {
  //for Css
  const classes = useStyles();
  //for Step
  const [activeStep, setActiveStep] = React.useState(0);
  //for Completed marking
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  //To Count Total Step
  const totalSteps = () => {
    return steps.length;
  };
  //Marking Complete step fn
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  //last step or submit form
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  //Handle Back Button 
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const newCompleted = completed;
    newCompleted[activeStep] = false;
    setCompleted(newCompleted)
  };
  //activing Step
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  //handle Next Button for new Tab
  const handleNext = () => {
    const newActiveStep = isLastStep() && !allStepsCompleted()
      ? steps.findIndex((step, i) => !(i in completed))
      : activeStep + 1;
    setActiveStep(newActiveStep);
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);




  };
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Divider />
      {/* Stepper Main Code  */}
      <Stepper nonLinear activeStep={activeStep} sx={{ m: 1, p: 1, cursor: 'pointer' }} connector={0}>
        {steps.map((label, index) => (

          <Step key={label} completed={completed[index]}>
            <StepLabel StepIconComponent={ColorlibStepIcon} sx={{ mr: 4, p: 1 }} onClick={handleStep(index)}>
              {label}
            </StepLabel>
          </Step>

        ))}
      </Stepper>
      {/* Information Button */}
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 1 }}>
        <motion.div
          whileHover={{ marginTop: -5 }}
        >
          <Button variant='outlined' color='success' className={classes.Btnhelp}
            startIcon={<Image src={Instructions} alt={'download'} width='16px' height='' />}
            sx={{ textTransform: 'capitalize' }}>
            Read Instructions
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ marginTop: -5 }}>
          <Button variant='outlined' color='success' className={classes.Btnhelp}
            startIcon={<Image src={Ohelp} alt={'download'} width='16px' height='' />}
            sx={{ textTransform: 'capitalize' }}>
            Help
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ marginTop: -5 }}>
          <Button variant='outlined' color='success' className={classes.Btnhelp}
            startIcon={<Image src={download} alt={'download'} width='16px' height='' />}
            sx={{ textTransform: 'capitalize' }}>
            Download
          </Button>
        </motion.div>
      </Box>
      {/**Here All Page Start */}
      <Paper className={classes.paper} elevation={0} sx={{ mb: 6 }}>
        <Box sx={{
          display: "flex", justifyContent: "space-between", mb: 4
        }}>
          <Box>
            <Typography className={classes.referencetext} sx={{ display: "flex", alignItems: 'center' }}>
              <InfoIcon sx={{ height: "0.8125rem", width: "0.8125rem", mr: '2px' }}></InfoIcon>
              Reference Number: HEC/A&A/DAS/2022/1718428
            </Typography>
          </Box>
          <Box>
            <Chip className={classes.chip} label="Saved" size='small' ></Chip>
          </Box>
        </Box>
        {/* Main 5 Component of Stepper Render Here */}
        <Box>
          {
            activeStep == 0 && <Personaldetails />
          }
          {
            activeStep == 1 && <Detailofdegree />
          }
          {
            activeStep == 2 && <AttestationDetails />
          }
          {
            activeStep == 3 && <DocumentUpload />
          }
          {
            activeStep == 4 && <VerifyDetails />
          }
        </Box>
        {/*All Navigation Button Render Here */}
        <Box>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                submit
              </Typography>
              {activeStep == 4 && <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Submit</Button>
              </Box>}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* render button according to Tab and Need*/}
              {activeStep == 2 &&
                <Box display='flex' justifyContent='flex-end'>
                  <Grid container spacing={1} sx={{ mt: 2, mb: 2 }}>
                    <Grid item><Button size='medium' className={classes.tab_4btn}>Preview</Button></Grid>
                    <Grid item ><Button size="medium" className={classes.tab_4btn}>Save&Close</Button></Grid>
                    <Grid item><Button size="medium" className={classes.tab_4btn} onClick={handleNext}>Next</Button></Grid>
                  </Grid>
                </Box>
              }
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, p: 3 }}>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item>
                      {activeStep == 0 && <Button
                        className={classes.BGB}
                        variant='contained'
                        sx={{ mr: 1 }}>GO BACK TO DASHBOARD
                      </Button>}
                    </Grid>
                    <Grid item>
                      {activeStep >= 1 && <Button className={classes.BGB}
                        variant='contained' onClick={handleBack}>GO PREVIOUS TAB
                      </Button>}
                    </Grid>
                    <Grid item>
                      {activeStep >= 1 &&
                        <Button
                          className={classes.BSF}
                          variant='contained'
                          color='error'
                        >CLOSE APPLICATION</Button>}
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item>
                      {activeStep == 1 &&
                        <Button className={classes.BSC} variant="contained">
                        >SAVE & CLOSE</Button>
                      }
                    </Grid>
                    <Grid item>
                      {activeStep != 2 &&
                        <Button onClick={handleNext}
                          className={classes.BSF}
                          variant='contained'
                          color='success'
                        >Next STEP
                        </Button>}
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Paper>
    </motion.div>
  )
}

export default DegreeAttestation

