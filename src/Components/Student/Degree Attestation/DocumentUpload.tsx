import React from 'react'
import {TableContainer, TableHead, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Alert from '@mui/material/Alert';
const useStyles = makeStyles({
  trow: {
    backgroundColor: "#f5f9fc",
  },
  referencetext: {
    fontFamily: "montserrat",
    fontSize: "0.8125rem",
    color: "#138e5d",
    fontWeight: "600"
  },
  myalert: {
    backgroundColor: "#fff4e5",
    margin: '1em'
  },
  personalinfo: {
    fontFamily: "montserrat",
    fontSize: "0.975rem",
    color: "#48465b",
    fontWeight: "bold"
  }
})
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Copy of CNIC', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DocumentUpload = () => {
  const classes = useStyles();
  return (
    <div>
      <Alert
        icon={<LightbulbIcon />}
        severity='warning'
       sx={{bgcolor:'#fff4e5',margin: '1em'}}
       className={classes.myalert}
      >
        Please ensure to upload readable scanned copies of CNIC,
        Degree(s) along with transcript(s) and other
        documents (case to case basis)
      </Alert>
      <Typography className={classes.personalinfo}>PERSONAL DOCUMENT LIST</Typography>
      <Alert
        icon={<LightbulbIcon />}
        severity='warning'
        sx={{backgroundcolor:'#fff4e5',margin: '1em'}}
        className={classes.myalert}
      >
        Note: Please upload the document only in png, jpg or pdf format.
      </Alert>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Bank Fee Receipt</TableCell>
          </TableRow>
          <TableRow className={classes.trow}>
            <TableCell>Transcript/Detailed Marksheet</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* Upload Document Table*/}
      <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TYPE</TableCell>
            <TableCell align="right">INDENTIFICATION NUMBER</TableCell>
            <TableCell align="right">TYPE</TableCell>
            <TableCell align="right">COUNTRY</TableCell>
            <TableCell align="right">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    </div>
  )
}

export default DocumentUpload