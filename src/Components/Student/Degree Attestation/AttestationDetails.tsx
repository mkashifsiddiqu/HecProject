/* eslint-disable prettier/prettier */
import React from 'react';
import { Divider, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const useStyles = makeStyles({
  main: {
    margin: `7em 2em 0 6em`,
  },
  paper: {
    padding: `1.5em`,
  },
  referencetext: {
    fontFamily: `montserrat`,
    fontSize: `0.8125rem`,
    color: `#138e5d`,
    fontWeight: `600`,
  },
  chip: {
    backgroundColor: `#84dcff`,
    fontFamily: `montserrat`,
    padding: `0.5em 0.2em`,
    fontWeight: `500`,
    color: `#0491ca`,
    cursor: `pointer`,
    '&:hover': {
      backgroundcolor: `#41a7fa`,
      color: `#fff`,
    },
    fontSize: `0.65rem`,
  },
  personalinfo: {
    fontFamily: `montserrat`,
    fontSize: `0.975rem`,
    color: `#48465b`,
    fontWeight: `bold`,
  },
  box: {
    margin: `1.5em 0 `,
  },
  ltext: {
    fontFamily: `monstserrat`,
  },
  t: {
    fontFamily: `montserrat`,
    fontSize: `0.8rem`,
    fontWeight: `500`,
  },
  tarea: {
    width: `1900px`,
  },
});
function createData(
  year: number,
  applicantName: string,
  qualificationLevel: string,
  universityName: string,
) {
  return {
    applicantName,
    year,
    qualificationLevel,
    universityName,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [value1, setvalue1] = React.useState(2);
  const [value2, setvalue2] = React.useState(1);
  let value3 = 0;
  const handleChange = () => {
    value3 = value1 * value2;
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: `unset` } }}>
        <TableCell component="th" scope="row">
          {row.applicantName}
        </TableCell>
        <TableCell align="left">{row.year}</TableCell>
        <TableCell align="left">{row.qualificationLevel}</TableCell>
        <TableCell align="left">
          {row.universityName}
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography className={classes.personalinfo}>
                PLEASE SELECT NUMBER OF PAGES OF DOCUMENTS TO BE ATTESTED
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>DOCUMENT TYPE</TableCell>
                    <TableCell>PAGES OF ORIGINAL DOCUMENTS</TableCell>
                    <TableCell>PAGES OF PHOTOCOPY DOCUMENTS</TableCell>
                    <TableCell align="right">AMOUNT</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Transcript
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="demo-helper-text-aligned-no-helper"
                        type="number"
                        size="small"
                        value={value1}
                        onChange={handleChange}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <TextField
                        id="demo-helper-text-aligned-no-helper"
                        type="number"
                        size="small"
                        value={value2}
                        onChange={handleChange}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Typography>{value3}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(2022, `Kashif`, `Software Engineering`, `University of Gujrat`),
];
const AttestationDetails = () => {
    console.log(dataUni);
  const classes = useStyles();
  return (
    <div>
      {/* Attestation Detail */}
      <Box>
        <Box className={classes.box}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <TextField
                select
                className={classes.ltext}
                color="success"
                label={
                  <Typography className={classes.t}>
                    Mode of Attestation
                  </Typography>
                }
                helperText="The applicant will have to pay Rs. 5000/- as Urgent Attestation Fee in addition to RS. 1000/- for attestation of each original document and Rs. 700 for each photocopy. The case will be processed on priority basis keeping in view only 50 urgent slots per day."
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                color="success"
                label={
                  <Typography className={classes.t}>
                    Where You Want To Get Attestation
                  </Typography>
                }
                helperText="Please select Where You Want To Get Attestation"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
        <Typography className={classes.personalinfo}>
          SELECTED DEGREES FOR ATTESTATION
        </Typography>
        <Divider sx={{ mt: 4 }}></Divider>
        <TableContainer sx={{ backgroundColor: `#f4f4f4` }}>
          <Table aria-label="collapsible table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  YEAR OF PASSING
                </TableCell>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  APPLICANT NAME ON DEGREE
                </TableCell>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  QUALIFICATION LEVEL
                </TableCell>
                <TableCell align="left" sx={{ fontSize: `11px` }}>
                  UNIVERSITY
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.applicantName} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box></Box>
      <Box
        sx={{
          mt: 2,
          backgroundColor: `#e6f7ed`,
          width: `100px`,
          height: `60px`,
        }}
      >
        <Typography sx={{ fontSize: `14px`, textAlign: `center`, p: 1 }}>
          Total Amount {7 + 7}
        </Typography>
      </Box>
    </div>
  );
};

export default AttestationDetails;
