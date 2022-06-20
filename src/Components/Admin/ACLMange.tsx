/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
  TableContainer,Table,TableHead,TableRow,
  TableCell,TableBody,TextField,FormGroup,
  FormControlLabel,Checkbox,Button,Box, Paper,
} from '@mui/material';
import ACLTable from './ACLTable';
const ACLMange = () => {
  return (
    <>
      <Paper sx={{margin:`25px 0`}}>
      <TableContainer>
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
              <TableCell>Hec Sub Admin Account</TableCell>
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
                    label="Universities Details"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Degree Templates"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Transcript Templates"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Degree Issuance"
                  />
                   <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Hec Queries"
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
      </TableContainer>
     </Paper>
      <ACLTable />
    </>
  );
};
export default ACLMange;
