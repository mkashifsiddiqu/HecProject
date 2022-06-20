/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import Students from '../Components/Student/E-Course/Students';
import { motion } from 'framer-motion';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
  Backdrop,
  Modal,
  Button,
  Popover,
  Link,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Divider,
} from '@mui/material';
import { Box } from '@mui/system';
import Studentinstruction from '../Components/Student/E-Course/Instruction/Studentinstruction';
import Facultyinstruction from '../Components/Student/E-Course/Instruction/Facultyinstruction';
import Alumniinstruction from '../Components/Student/E-Course/Instruction/Alumniinstruction';
import Faculty from '../Components/Student/E-Course/Faculty';
import Alumni from '../Components/Student/E-Course/Alumni';
import Foam from '@/Components/Student/E-Course/Foam';
const Ecourses = () => {
  //use for Course Numbering to Render
  const [eCourseNum, seteCourseNum] = React.useState(`0`);
  //for Selecting Course User
  const handleChange = (event: SelectChangeEvent) => {
    seteCourseNum(event.target.value as string);
  };
  const [open, setOpen] = React.useState(false);
  //To Show main popup Selection
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);
  const handleClose = () => setOpen(false);
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {eCourseNum == `1` && <Students />}
      {eCourseNum == `2` && <Faculty />}
      {eCourseNum == `3` && <Alumni />}
      {/* for Default load */}
      {eCourseNum == `0` && <Foam />}
      <Popover
        sx={{boxShadow:`2px 2px 2px 1px rgba(0, 0, 0, 0.2);`}}
        open={open}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 200, left: 300 }}
        anchorOrigin={{
          vertical: `center`,
          horizontal: `center`,
        }}
        transformOrigin={{
          vertical: `top`,
          horizontal: `right`,
        }}
        PaperProps={{
          style: { width: `95%` },
        }}
        sx={{ top: 0, left: `62px` }}
      >
        <Box>
          <Typography
            sx={{
              mb: 2,
              p: 2,
              pl: 3,
              backgroundColor: `#f4f8f7`,
              fontWeight: `500`,
            }}
            fontFamily={`montserrat`}
          >
            Coursea intructions
          </Typography>
          <Box sx={{ minWidth: 6, m: 3 }}>
            {eCourseNum == `1` && <Studentinstruction />}
            {eCourseNum == `2` && <Facultyinstruction />}
            {eCourseNum == `3` && <Alumniinstruction />}
            <FormControl sx={{ width: `600px` }}>
              <InputLabel id="demo-simple-select-label">User Type</InputLabel>
              <Select
                required
                value={eCourseNum}
                label="E-Course"
                onChange={handleChange}
              >
                <MenuItem value={3}>Alumni</MenuItem>
                <MenuItem value={2}>Faculty</MenuItem>
                <MenuItem value={1}>Stutdent</MenuItem>
              </Select>
            </FormControl>
            <FormGroup sx={{ mt: 1 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    sx={{ color: `green`, '&.Mui-checked': { color: `green` } }}
                  />
                }
                label={
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`12px`}
                    fontWeight={`600`}
                  >
                    By selecting any category you are agreed our terms and
                    conditions.
                  </Typography>
                }
              />
            </FormGroup>
            <Divider />
            <Box
              sx={{
                mt: 2,
                display: `flex`,
                justifyContent: `flex-end`,
                fontWeight: `600`,
              }}
            >
              <Button
                onClick={handleClose}
                sx={{
                  color: `#1bb55e`,
                  border: `1px solid #1bb55e`,
                  backgroundColor: `white`,
                  fontSize: `13px`,
                  '&:hover': {
                    color: `white`,
                    border: `1px solid #1bb55e`,
                    backgroundColor: `#1bb55e`,
                  },
                }}
              >
                PROCEED
              </Button>
            </Box>
          </Box>
        </Box>
      </Popover>
    </motion.div>
  );
};

export default Ecourses;
