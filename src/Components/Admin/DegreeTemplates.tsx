/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Typography, List, ListItem, ListItemText, Box, IconButton, Paper, Divider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

function createData(
  name: string,
  status: String,
  action: any,
) {
  return { name, status, action };
}
function newRequestData(
  DegreeName: string,
  UniveristyName: String,
  
) {
  return { DegreeName, UniveristyName};
}

const rows = [
  createData('Degree Name', `Verfied`, <IconButton><VisibilityIcon color={`primary`} /></IconButton>),
  createData('Degree Name', `Verfied`, <IconButton><VisibilityIcon color={`primary`} /></IconButton>),
  createData('Degree Name', `Verfied`, <IconButton><VisibilityIcon color={`primary`} /></IconButton>),
  createData('Degree Name', `Verfied`, <IconButton><VisibilityIcon color={`primary`} /></IconButton>),
];
const newRequest = [
  newRequestData('Degree Name 1', `University of Gujrat`),
  newRequestData(`Degree Name 2`, `University of Gujrat`),
  newRequestData(`Degree Name 3`, `University of Gujrat`),
  newRequestData(`Degree Name 4`, `University of Gujrat`),
]
const Degreetemplate = () => {
  return (
    <div>
      <Box margin={`0 3em`} >
        <Typography fontFamily={`montserrat`} fontSize={`1rem`} color={`#0000008a`} fontWeight={600}>New Request to Verify Degree Template</Typography>
        <Paper sx={{margin:`1em 0 0 0`}}>
        <List>
          {newRequest.map((newRequestData)=>(
           <React.Fragment>
            <ListItem key={newRequestData.DegreeName}>
              <ListItemText sx={{textAlign:`left`}}>{newRequestData.DegreeName}</ListItemText>
              <ListItemText sx={{textAlign:`left`}}>{newRequestData.UniveristyName}</ListItemText>
              <Box display={`flex`} justifyContent={`flex-end`}>
                <IconButton><VisibilityIcon color={`primary`} /></IconButton>
                <IconButton><DoneIcon color={`success`} /></IconButton>
                <IconButton><ClearIcon color={`error`} /></IconButton>
              </Box>
            </ListItem>
             <Divider/>
        </React.Fragment> 
          ))}
      </List>
        </Paper>
       <Typography margin={`1em 0`} fontFamily={`montserrat`} fontSize={`1rem`} color={`#0000008a`} fontWeight={600}>Verified Degree Template</Typography>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Degree Names</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </Box>
    </div>
  );
};
export default Degreetemplate;