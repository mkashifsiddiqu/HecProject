/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
  TableContainer,Table,TableHead,TableRow,
  TableCell,TableBody,TextField,FormGroup,
  FormControlLabel,Checkbox,Button,Box, Paper,
} from '@mui/material';
import ACLTable from '../Admin/ACLTable';
const ACLMange = () => {
  const [addFP,setAddFP]= React.useState<boolean>(false)
  return (
    <>
      <Paper sx={{margin:`25px 0`}}>
      {addFP &&<TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Field</TableCell>
              <TableCell>Operations</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>FP Account</TableCell>
              <TableCell>
              <Box sx={{display:`flex`,flexDirection:`column`,justifyContent:`space-around`,height:`20vh`}}>
              <TextField 
               label='Email'
               size='small'
               fullWidth
               color='success'
              />
              <TextField 
               label='Password'
               size='small'
               fullWidth
               color='success'
              />
              </Box>  
              
              </TableCell>
              <TableCell>
                <FormGroup sx={{ display: `flex` }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Program Detail"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Degree Template"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Transcript Template"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Student Degree Issue"
                  />
                </FormGroup>
              </TableCell>
              <TableCell >
                <Box sx={{display:`flex`,flexDirection:`column`}}>
                <Button variant="text"  size='small'>
                  Save
                </Button>
                {/* <Button variant="text"  size='small'>
                  Update
                </Button>
                <Button variant="text" size='small'>
                  Delete
                </Button> */}
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>}
      <TableContainer>
        <Button variant='text' fullWidth onClick={()=>{setAddFP(true)}}>Add Focal Person</Button>
      </TableContainer>
      </Paper>
      <ACLTable />
    </>
  );
};
export default ACLMange;
