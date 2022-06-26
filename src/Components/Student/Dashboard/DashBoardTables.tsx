/* eslint-disable prettier/prettier */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import LastPageIcon from '@mui/icons-material/LastPage';
import {
  Card,
  Chip,
  Grid,
  Hidden,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import edit from '../../../../public/gedit.svg';
import download from '../../../../public/gdownload.svg';
import CachedIcon from '@mui/icons-material/Cached';
function TablePaginationActions(props: {
  count: any;
  page: any;
  rowsPerPage: any;
  onPageChange: any;
}) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: any) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: any) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: any) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: any) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === `rtl` ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === `rtl` ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === `rtl` ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === `rtl` ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  conPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  cardsPerPage: PropTypes.number.isRequired,
};

function createData(
  applicationid: number,
  applicationtype: string,
  date: string,
) {
  return { applicationid, applicationtype, date };
}

const rows = [
  createData(1, `Degree Attestation Service`, `5/1/2022`),
  createData(2, `Degree Attestation Service`, `5/1/2022`),
  createData(3, `Degree Attestation Service`, `5/1/2022`),
  createData(4, `Degree Attestation Service`, `5/1/2022`),
  createData(5, `Degree Attestation Service`, `5/1/2022`),
  createData(6, `Degree Attestation Service`, `5/1/2022`),
  createData(7, `Degree Attestation Service`, `5/1/2022`),
  // createData(8, 	"Degree Attestation Service", "5/1/2022"),
  // createData(9, 	"Degree Attestation Service", "5/1/2022"),
  // createData(10, 	"Degree Attestation Service", "5/1/2022"),
  // createData(11, 	"Degree Attestation Service", "5/1/2022"),
  // createData(12, 	"Degree Attestation Service", "5/1/2022"),
  // createData(13, 	"Degree Attestation Service", "5/1/2022"),
].sort((a, b) => (a.applicationtype < b.applicationtype ? -1 : 1));

const cards = [
  createData(1, `Degree Attestation Service`, `5/1/2022`),
  createData(2, `Degree Attestation Service`, `5/1/2022`),
].sort((a, b) => (a.applicationtype < b.applicationtype ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [cardsPerPage, setCardsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const emptyCards =
    page > 0 ? Math.max(0, (1 + page) * cardsPerPage - cards.length) : 0;

  const handleChangePage = (
    event: any,
    newPage: React.SetStateAction<number>,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeCardsPerPage = (event: { target: { value: string } }) => {
    setCardsPerPage(parseInt(event.target.value, 10));
  };

  const newLocal = '1rem';
  return (
    <Box margin={`1em`}>
      <TableContainer component={Paper}>
        <Box padding={`0.5em`}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                fontFamily={`montserrat`}
                fontSize={`1rem`}
                color={`#0000008a`}
                fontWeight={700}
              >
                MY APPLICATIONS
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: `flex`,alignItems:`center`}}>
                <Box sx={{ display: `flex`,width:`160px`,alignItems:`center`,mr:2,'&:hover':{transform:`scale(1.05)`} }}>
                  <CachedIcon sx={{width:`25px`,height:`25px`,
                        bgcolor:`#369F75`,color:`white`,borderRadius:`50%`,mr:1,'&:hover':{transform:`rotate(45deg)`},cursor:`pointer`}}/>
                  <Typography fontSize={`12px`} fontWeight={`500`}>Refresh Session</Typography>
                </Box>
                <TextField
                  placeholder='Application id, Application Status'
                  InputLabelProps={{style: {fontSize: 14}}}
                  sx={{'& input::placeholder':{fontSize:`10px`,color:`black`}}}
                  InputProps={{
                    style: {fontSize: 14,fontFamily: `montserrat`},
                    endAdornment:(<SearchIcon fontSize='small'/>)}}
                  color='success'
                  label="Filter"
                  variant="standard"
                  size="small"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Table
          sx={{ minWidth: 500 }}
          size="small"
          aria-label="custom pagination table"
        >
          <Hidden mdDown>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    APPLICATION ID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    APPLICATION TYPE
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    DATE
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    STATUS
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    EDIT/VIEW
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontFamily={`montserrat`}
                    fontSize={`0.75rem`}
                    color={`#0000008a`}
                    fontWeight={600}
                  >
                    DOWNLOAD FORM
                  </Typography>
                </TableCell>
              </TableRow>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                  )
                : rows
              ).map((row) => (
                <TableRow
                  key={row.applicationid}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    '&:nth-of-type(odd)': { background: `#f5f9fc` },
                  }}
                >
                  <TableCell
                    sx={{
                      fontFamily: `montserrat`,
                      fontSize: `0.80rem`,
                      color: `#000`,
                      fontWeight: 500,
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.applicationid}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: `montserrat`,
                      fontSize: `0.80rem`,
                      color: `#000`,
                      fontWeight: 500,
                    }}
                  >
                    {row.applicationtype}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: `montserrat`,
                      fontSize: `0.80rem`,
                      color: `#000`,
                      fontWeight: 500,
                    }}
                  >
                    {row.date}
                  </TableCell>
                  <TableCell>
                    <Tooltip title="View Application Status">
                      <Chip
                        sx={{
                          backgroundColor: `#84dcff`,
                          fontFamily: `montserrat`,
                          padding: `0.5em 0.2em`,
                          fontWeight: `500`,
                          color: `#0491ca`,
                          cursor: `pointer`,
                          fontSize: `0.65rem`,
                          '&:hover': {
                            backgroundcolor: `#41a7fa`,
                            color: `#fff`,
                          },
                        }}
                        label="Saved"
                        size="small"
                      ></Chip>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <Image src={edit} alt="edit"></Image>
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton sx={{ height: `1em`, width: `1.2em` }}>
                      <Image src={download} alt="download"></Image>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Hidden>
          <Hidden mdUp>
            <TableBody>
              <Box>
                {(cardsPerPage > 0
                  ? cards.slice(
                      page * cardsPerPage,
                      page * cardsPerPage + cardsPerPage,
                    )
                  : cards
                ).map((card) => (
                  // eslint-disable-next-line react/jsx-key
                  <Card
                    sx={{
                      backgroundColor: `#eef8ff`,
                      marginLeft: `0.625rem`,
                      marginRight: `0.625rem`,
                      marginTop: `1.25rem`,
                      marginBottom: `1.25rem`,
                      padding: `1em`,
                      bordercolor: `#C5C5C5`,
                      border: `1px`,
                    }}
                    elevation={0}
                  >
                    <Grid container>
                      <Grid item xs={4} marginBottom={`0.9375rem`}>
                        <Typography
                          fontFamily={`montserrat`}
                          fontSize={`0.6875rem`}
                          color={`#000000de`}
                          fontWeight={700}
                        >
                          APPLICATION ID
                        </Typography>
                        <Typography
                          fontFamily={`montserrat`}
                          fontSize={`0.6875rem`}
                          color={`#000`}
                          fontWeight={500}
                        >
                          {card.applicationid}
                        </Typography>
                      </Grid>
                      <Grid item xs={8} marginBottom={`0.9375rem`}>
                        <Box
                          sx={{ display: `flex`, justifyContent: `flex-end` }}
                        >
                          <Tooltip title="View Application Status">
                            <Chip
                              label="Saved"
                              sx={{ bgcolor: `#84ddff`, color: `#1e87b0` }}
                            ></Chip>
                          </Tooltip>
                        </Box>
                      </Grid>
                      <Grid item xs={12} marginBottom={`0.9375rem`}>
                        <Typography
                          fontFamily={`montserrat`}
                          fontSize={`0.6875rem`}
                          color={`#000000de`}
                          fontWeight={700}
                        >
                          APPLICATION TYPE
                        </Typography>
                        <Typography
                          fontFamily={`montserrat`}
                          fontSize={`0.6875rem`}
                          color={`#000`}
                          fontWeight={500}
                        >
                          {card.applicationtype}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        marginBottom={`0.9375rem`}
                        sx={{
                          display: `flex`,
                          justifyContent: `space-between`,
                        }}
                      >
                        <Box>
                          <Typography
                            fontFamily={`montserrat`}
                            fontSize={`0.6875rem`}
                            color={`#000000de`}
                            fontWeight={700}
                          >
                            DATE
                          </Typography>
                          <Typography
                            fontFamily={`montserrat`}
                            fontSize={`0.6875rem`}
                            color={`#000`}
                            fontWeight={500}
                          >
                            {card.date}
                          </Typography>
                        </Box>
                        <Box>
                          <IconButton>
                            <Image src={edit} alt="edit"></Image>
                          </IconButton>
                          <IconButton sx={{ height: `1em`, width: `1.2em` }}>
                            <Image src={download} alt="download"></Image>
                          </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                ))}
              </Box>
            </TableBody>
          </Hidden>

          <TableFooter>
            <TableRow>
              <TablePagination
                sx={{ color: `#8c9da5` }}
                rowsPerPageOptions={[5, 10, 25, { label: `All`, value: -1 }]}
                colSpan={6}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': `items per page`,
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}
