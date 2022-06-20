/* eslint-disable prettier/prettier */
import React from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import {
    Alert,
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: `montserrat`,
        fontSize: 13,
    },
});

const VerifyDetails = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Alert icon={<LightbulbIcon />} severity="warning">
                    <Typography color={`#484848`} fontSize={13} fontWeight={600}>
                        Note: Please upload the document only in png, jpg or pdf format.
                    </Typography>
                </Alert>
                <Box>
                    <Typography
                        marginBottom={`20px`}
                        fontSize={14}
                        fontWeight={700}
                        color={`#191d28`}
                    >
                        APPLICATION DETAILS
                    </Typography>
                    <Grid container spacing={2} marginBottom={`20px`}>
                        <Grid item xs={12} md={3}>
                            <Typography fontSize={13} fontWeight={500} color="#333333d9">
                                Application Reference:
                            </Typography>
                            <Typography fontSize={13} fontWeight={700} color="#333333d9">
                                HEC/A&A/DAS/2022/1718428
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography fontSize={13} fontWeight={500} color="#333333d9">
                                Mode of Attestation
                            </Typography>
                            <Typography fontSize={13} fontWeight={700} color="#333333d9">
                                Walk-in (Urgent Attestation)
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography fontSize={13} fontWeight={500} color="#333333d9">
                                From Where You Are Sending Documents
                            </Typography>
                            <Typography fontSize={13} fontWeight={700} color="#333333d9">
                                Islamabad
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography fontSize={13} fontWeight={500} color="#333333d9">
                                CNIC
                            </Typography>
                            <Typography fontSize={13} fontWeight={700} color="#333333d9">
                                3420103814143
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography
                        marginBottom={`20px`}
                        fontSize={14}
                        fontWeight={700}
                        color={`#191d28`}
                    >
                        PERSONAL DETAILS
                    </Typography>
                    <Table size="small" sx={{ margin: `0 0 20px 0` }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography fontSize={11} fontWeight={600} color={`#757575`}>
                                        ITEM
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography fontSize={11} fontWeight={600} color={`#757575`}>
                                        PERSONAL DETAILS
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                                        Full Name
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                                        {` `}
                                        Muhammad Abubakar
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                                        Gender
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                                        Male
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                                        Date of Birth
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                                        1999-05-15
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                                        Mailing Address
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography fontSize={13} fontWeight={700} color={`#212529`}>
                                        {` `}
                                        Abubakar Street, Shadman Colony,Gujrat,Gujrat,Pakistan
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox required color="success" />}
                            label="Please ensure that there is no variation in your name, father's name and date of birth written in personal details as mentioned above"
                        />
                    </FormGroup>

                    {/* Component of 3ed page */}

                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox required color="success" />}
                            label="I Mr./Ms. Muhammad Abubakar User bearing CNIC # 3420103814143 hereby solemnly declare that all my degree(s)/Transcript(s)/Certificates including Secondary School Certificate (SSC), Higher Secondary Certificate (HSSC) or Equivalent and all my subsequent degrees/transcripts or equivalent are genuine from recognized university/degree awarding institute and are in line with academic standards. If at any stage it is revealed that any of my academic degree(s)/Transcript(s) /Certificates are FAKE/BOGUS or not in line with academic regulations of the university, the HEC would have right to immediately cancel the attestation done on my degree(s)/Transcript(s)/Certificates. Besides, I would be held accountable for disciplinary and legal proceedings for concealment of facts and forgery of academic documents."
                        />
                    </FormGroup>
                </Box>
            </ThemeProvider>
        </div>
    );
};

export default VerifyDetails;
