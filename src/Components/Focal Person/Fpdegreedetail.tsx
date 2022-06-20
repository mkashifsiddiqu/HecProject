/* eslint-disable prettier/prettier */
import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Icon, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Fpdegreedetail = () => {
  return (
    <div>
      <Box margin={`10px 0`}>
      {/* <Accordion>
        <AccordionSummary>Program Details</AccordionSummary>
        <AccordionDetails> */}
          <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Field</TableCell>
              <TableCell>Operations</TableCell>
              <TableCell>Counts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Program Title</TableCell>
              <TableCell><TextField variant="outlined" color='success' size='small' /></TableCell>
              <TableCell><IconButton><Icon><AddIcon/></Icon></IconButton><IconButton><Icon><EditIcon/></Icon></IconButton><IconButton><Icon><DeleteIcon/></Icon></IconButton></TableCell>
              <TableCell>0/100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>University Name on Degree</TableCell>
              <TableCell><TextField variant="outlined" color='success'  size='small' /></TableCell>
              <TableCell><IconButton><Icon><AddIcon/></Icon></IconButton><IconButton><Icon><EditIcon/></Icon></IconButton><IconButton><Icon><DeleteIcon/></Icon></IconButton></TableCell>
              <TableCell>0/100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Campus</TableCell>
              <TableCell><TextField variant="outlined" color='success'  size='small' /></TableCell>
              <TableCell><IconButton><Icon><AddIcon/></Icon></IconButton><IconButton><Icon><EditIcon/></Icon></IconButton><IconButton><Icon><DeleteIcon/></Icon></IconButton></TableCell>
              <TableCell>0/100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Department</TableCell>
              <TableCell><TextField variant="outlined" color='success'  size='small' /></TableCell>
              <TableCell><IconButton><Icon><AddIcon color='success'/></Icon></IconButton><IconButton><Icon><EditIcon/></Icon></IconButton><IconButton><Icon><DeleteIcon/></Icon></IconButton></TableCell>
              <TableCell>0/100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Degree Type</TableCell>
              <TableCell><TextField variant="outlined" color='success'  size='small' /></TableCell>
              <TableCell><IconButton><Icon><AddIcon/></Icon></IconButton><IconButton><Icon><EditIcon/></Icon></IconButton><IconButton><Icon><DeleteIcon/></Icon></IconButton></TableCell>
              <TableCell>0/100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Session Type</TableCell>
              <TableCell><TextField variant="outlined" color='success'  size='small' /></TableCell>
              <TableCell><IconButton><Icon><AddIcon/></Icon></IconButton><IconButton><Icon><EditIcon/></Icon></IconButton><IconButton><Icon><DeleteIcon/></Icon></IconButton></TableCell>
              <TableCell>0/100</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        {/* </AccordionDetails>
      </Accordion> */}
      </Box>
    </div>
  )
}

export default Fpdegreedetail
