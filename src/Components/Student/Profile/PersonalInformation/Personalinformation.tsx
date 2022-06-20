import { Box } from '@mui/material'
import React from 'react'
import BiographicalInformation from './BiographicalInformation'
import FatherInformation from './FatherInformation'
import TellUsAboutYourself from './TellUsAboutYourself'
import Nationalityinformation from './Nationalityinformation'

const Personalnformation = () => {
  return (
    <div>
        <Box>
            <TellUsAboutYourself/>
            <BiographicalInformation/>
            <FatherInformation/>
            <Nationalityinformation/>
        </Box>
    </div>
  )
}

export default Personalnformation