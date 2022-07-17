import React from 'react';
import {
  Box,
  Icon,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  Select,
  Modal,
  Typography,
  Paper,
} from '@mui/material';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
// const Input = styled(`input`)({
//   display: `none`,
// });
// const degreeType = [`Regular`, `Afternoon`, `Distance learning`, `Private`];
// const imgList = [`template_2018`, `template_2010`];
const FpDegreetemplate = () => {
  // const [value, setValue] = React.useState<Date | null>(new Date(``));
  // const [img, setImg] = React.useState<string | null>(`no file Choose`);
  // const handleChange = (newValue: Date | null) => {
  //   setValue(newValue);
  // };
  // const [personName, setPersonName] = React.useState([]);
  // const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const { options } = event.target;
  //   const value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   setImg(value);
  //   setPersonName(value);
  // };
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <div>
      {/* <Box margin={`10px 0`}>
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
                    <TableCell>Type</TableCell>
                    <TableCell>
                      <Select
                        native
                        value={personName}
                        color="success"
                        onChange={handleChangeType}
                        size="small"
                        fullWidth
                      >
                        {degreeType.map((name) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <Icon>
                          <AddIcon />
                        </Icon>
                      </IconButton>
                      <IconButton>
                        <Icon>
                          <EditIcon />
                        </Icon>
                      </IconButton>
                      <IconButton>
                        <Icon>
                          <DeleteIcon />
                        </Icon>
                      </IconButton>
                    </TableCell>
                    <TableCell>0/100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Degree Template</TableCell>
                    <TableCell>
                      <Select
                        native
                        value={img}
                        color="success"
                        onChange={handleChangeType}
                        size="small"
                        fullWidth
                      >
                        {imgList.map((name) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell>
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          onChange={() => {
                            if (event.target.files.length > 0) {
                              setImg(event.target.files[0].name);
                              imgList.push(event.target.files[0].name);
                            }
                          }}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <AddPhotoAlternateIcon />
                        </IconButton>
                      </label>
                      <IconButton color="success" onClick={handleOpen}>
                        <Icon>
                          <PhotoSizeSelectActualIcon />
                        </Icon>
                      </IconButton>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Paper
                          sx={{
                            position: `absolute` as 'absolute',
                            top: `50%`,
                            left: `50%`,
                            transform: `translate(-50%, -50%)`,
                            width: 400,
                            bgcolor: `background.paper`,
                            boxShadow: 24,
                            p: 4,
                          }}
                        >
                          <Typography>Image Preveiw</Typography>
                        </Paper>
                      </Modal>
                      <IconButton
                        color="error"
                        onClick={() => {
                          imgList.pop();
                        }}
                      >
                        <Icon>
                          <DeleteIcon />
                        </Icon>
                      </IconButton>
                    </TableCell>
                    <TableCell>0/100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Start Date</TableCell>
                    <TableCell>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                          inputFormat="dd/MM/yyyy"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              color="success"
                              InputLabelProps={{
                                style: {
                                  fontWeight: 700,
                                  fontSize: `14px`,
                                  fontFamily: `montserrat`,
                                },
                              }}
                              helperText="Please Select Your Start Date e.g 01/01/2022"
                              size="small"
                              fullWidth
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <Icon>
                          <AddIcon />
                        </Icon>
                      </IconButton>
                      <IconButton>
                        <Icon>
                          <EditIcon />
                        </Icon>
                      </IconButton>
                      <IconButton>
                        <Icon>
                          <DeleteIcon />
                        </Icon>
                      </IconButton>
                    </TableCell>
                    <TableCell>0/100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>End Date</TableCell>
                    <TableCell>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <MobileDatePicker
                          inputFormat="dd/MM/yyyy"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              color="success"
                              InputLabelProps={{
                                style: {
                                  fontWeight: 700,
                                  fontSize: `14px`,
                                  fontFamily: `montserrat`,
                                },
                              }}
                              helperText="Please Select Your End Date e.g 01/01/2022"
                              size="small"
                              fullWidth
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <Icon>
                          <AddIcon />
                        </Icon>
                      </IconButton>
                      <IconButton>
                        <Icon>
                          <EditIcon />
                        </Icon>
                      </IconButton>
                      <IconButton>
                        <Icon>
                          <DeleteIcon />
                        </Icon>
                      </IconButton>
                    </TableCell>
                    <TableCell>0/100</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
       
      </Box> */}
    </div>
  );
};

export default FpDegreetemplate;
