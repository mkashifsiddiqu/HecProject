/* eslint-disable prettier/prettier */
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const RecentActivities = () => {
  return (

    <div>
      <Box>
        <Paper sx={{ margin: `1em`, padding: `1em 1em 0em 1em` }}>
          <Typography fontFamily={`montserrat`} fontSize={`1rem`} color={`#797D86`} fontWeight={700}>RECENT ACTIVITIES</Typography>
          <Box padding={`1em`}></Box>
        </Paper>

      </Box>
    </div>
  )
}

export default RecentActivities