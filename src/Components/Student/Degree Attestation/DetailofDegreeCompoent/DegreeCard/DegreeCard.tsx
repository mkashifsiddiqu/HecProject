import { Button, Card, Checkbox, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const DegreeCard = () => {
  return (
    <div>
        <Card sx={{backgroundColor:'#fdfdfd'}} elevation={0}>
            <Box display={"flex"}  padding={"20px 30px"}>
               <Checkbox disableRipple/>
            <Box padding={"0 0 0 37px"}>
                <Grid container spacing={2} xs={12}>
                    <Grid item xs={12}>
                        <Typography fontFamily={"montserrat"} color="#424b5f" fontSize={15} fontWeight={600} >Bachelor (16 Years) Degree</Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Box marginBottom={"10px"}>
                            <Typography marginY={"4px"} fontFamily={"montserrat"} fontSize={12} color="#94b1bc" fontWeight={700}>YEAR</Typography>
                            <Typography fontFamily={"montserrat"} fontSize={12} color="#777777" fontWeight={500}>2022</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Box marginBottom={"10px"}>
                            <Typography marginY={"4px"} fontFamily={"montserrat"} fontSize={12} color="#94b1bc" fontWeight={700}>PROGRAM TITLE</Typography>
                            <Typography fontFamily={"montserrat"} fontSize={12} color="#777777" fontWeight={500}>BS in Software Engineering</Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Box marginBottom={"10px"}>
                            <Typography marginY={"4px"} fontFamily={"montserrat"} fontSize={12} color="#94b1bc" fontWeight={700}>UNIVERSITY</Typography>
                            <Typography fontFamily={"montserrat"} fontSize={12} color="#777777" fontWeight={500}>University of Gujrat, Gujrat</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}> 
                        <Box display={"flex"} justifyContent={"flex-end"}>
                            <Button color='success' variant='outlined' sx={{texttransform:"none"}}><RemoveRedEyeOutlinedIcon sx={{padding:"0 5px 0 0"}} color='success'/>View</Button>
                            <Button color='info' variant='outlined' sx={{texttransform:"none", margin:"0 10px"}}><EditOutlinedIcon sx={{padding:"0 5px 0 0"}} color='info'/>Edit</Button>
                            <Button color='error' variant='outlined' sx={{texttransform:"none"}}><DeleteOutlineOutlinedIcon sx={{padding:"0 5px 0 0"}} color='error'/>Delete</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box> 
            </Box>

            
        </Card>
    </div>
  )
}

export default DegreeCard