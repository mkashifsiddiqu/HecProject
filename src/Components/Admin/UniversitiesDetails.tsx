/* eslint-disable prettier/prettier */
import { Button, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { TextField } from '@mui/material';
const currencies = [
  {
    value: `pk`,
    label: `Pakistan`,
  },
  {
    value: `india`,
    label: `India`,
  },
  {
    value: `Tr`,
    label: `Turkey`,
  },
  {
    value: `ta`,
    label: `China`,
  },
];
const Admin = () => {
  const [currency, setCurrency] = React.useState(`EUR`);
  const [btn,setbtn] = React.useState(false);
  const [btn1,setbtn1] = React.useState(false);
  const [btn2,setbtn2] = React.useState(false);
  return (
    <>
     <Paper>
          <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Field</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Counts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>
                <TextField variant="outlined" color='success' size='small' select fullWidth  >
                      {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value} onClick={()=>setbtn(true)}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
              </TableCell>
              <TableCell><Button>Add</Button>{btn && <> <Button>Edit</Button><Button color='error'>Delete</Button> </>}</TableCell>
              <TableCell>0/100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Institutes</TableCell>
              <TableCell><TextField variant="outlined" color='success'  size='small' fullWidth onSelect={()=>{setbtn1(true)}}/></TableCell>
              <TableCell><Button>Add</Button>{btn1 && <> <Button>Edit</Button><Button color='error'>Delete</Button> </>}</TableCell>
              <TableCell>0/100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell><TextField variant="outlined" color='success'  size='small' fullWidth  onSelect={()=>{setbtn2(true)}}/></TableCell>
              <TableCell><Button>Add</Button>{btn2 && <> <Button>Edit</Button><Button color='error'>Delete</Button> </>}</TableCell>
              <TableCell>0/100</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </>
  )
}

export default Admin
