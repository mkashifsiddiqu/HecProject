/* eslint-disable prettier/prettier */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
const Institutes = () => {
  return (
    <>
      <Container sx={{ height: `100%`, width: `100%` }}>
        <Accordion sx={{ maxWidth: 980 }}>
          <AccordionSummary>
            <Typography sx={{ fontWeight: `bold` }}>Add Institute</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel>Country</InputLabel>
              <Select>
                <MenuItem value="Pakistan">Pakistan</MenuItem>
                <MenuItem value="United States">United States</MenuItem>
                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                <MenuItem value="Turkey">Turkey</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel htmlFor="component-outlined">Institutes</InputLabel>
              <OutlinedInput />
            </FormControl>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput />
            </FormControl>
          </AccordionDetails>
        </Accordion>

        <TableContainer component={Paper} sx={{ my: 1, maxWidth: 980 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: `bold` }}>Institutes</TableCell>
                <TableCell sx={{ fontWeight: `bold` }}>Email</TableCell>
                <TableCell sx={{ fontWeight: `bold` }}>Country</TableCell>
                <TableCell sx={{ fontWeight: `bold` }}>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell contentEditable="true">Oxford</TableCell>
                <TableCell contentEditable="true"></TableCell>
                <TableCell contentEditable="true">United Kingdom</TableCell>
                <TableCell>
                  {` `}
                  <EditIcon cursor="pointer"></EditIcon>{` `}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell contentEditable="true">
                  University of Gujrat
                </TableCell>
                <TableCell contentEditable="true">ali@uog.edu.pk</TableCell>
                <TableCell contentEditable="true">Pakistan</TableCell>
                <TableCell>
                  <EditIcon cursor="pointer"></EditIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell contentEditable="true">Harvard</TableCell>
                <TableCell contentEditable="true"></TableCell>
                <TableCell contentEditable="true">United States</TableCell>
                <TableCell>
                  <EditIcon cursor="pointer"></EditIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell contentEditable="true">Air University</TableCell>
                <TableCell contentEditable="true">ahmed@air.edu.pk</TableCell>
                <TableCell contentEditable="true">Pakistan</TableCell>
                <TableCell>
                  <EditIcon cursor="pointer"></EditIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell contentEditable="true">Cankaya University</TableCell>
                <TableCell contentEditable="true"></TableCell>
                <TableCell contentEditable="true">Turkey</TableCell>
                <TableCell>
                  <EditIcon cursor="pointer"></EditIcon>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Institutes;
