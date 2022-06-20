/* eslint-disable prettier/prettier */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/styles';
import { Box, Card, Hidden, Typography } from '@mui/material';
const useStyles = makeStyles({
  htext: {
    fontFamily: `montserrat`,
    fontSize: `0.6875rem`,
    color: `#757575`,
    fontWeight: `bold`,
  },
  btext: {
    fontFamily: `montserrat`,
    fontSize: `0.8125rem`,
    color: `#333333d9`,
    fontWeight: `initial`,
  },
  card: {
    padding: `1em`,
  },
});

function createData(identification: number, type: string, country: string) {
  return { identification, type, country };
}

const rows = [createData(3420103814143, `CNIC`, `Pakistan`)];
const cards = [createData(3420103814143, `CNIC`, `Pakistan`)];

export default function DenseTable() {
  const classes = useStyles();
  return (
    <Box>
      <Hidden mdDown>
        <TableContainer elevation={0} component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.htext}>IDENRIFICATION</TableCell>
                <TableCell align="left" className={classes.htext}>
                  TYPE
                </TableCell>
                <TableCell align="left" className={classes.htext}>
                  COUNTRY
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.identification}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    className={classes.btext}
                    component="th"
                    scope="row"
                  >
                    {row.identification}
                  </TableCell>
                  <TableCell align="left" className={classes.btext}>
                    {row.type}
                  </TableCell>
                  <TableCell align="left" className={classes.btext}>
                    {row.country}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Hidden>
      <Hidden mdUp>
        {cards.map((card) => (
          <Card
            elevation={3}
            className={classes.card}
            key={card.identification}
          >
            <Box>
              <Typography className={classes.htext}>IDENRIFICATION</Typography>
              <Typography className={classes.btext}>
                {card.identification}
              </Typography>
            </Box>
            <Box sx={{ marginTop: `1em`, marginBottom: `1em` }}>
              <Typography className={classes.htext}>TYPE</Typography>
              <Typography className={classes.btext}>{card.type}</Typography>
            </Box>
            <Box>
              <Typography className={classes.htext}>COUNTRY</Typography>
              <Typography className={classes.btext}>{card.country}</Typography>
            </Box>
          </Card>
        ))}
      </Hidden>
    </Box>
  );
}
