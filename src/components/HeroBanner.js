import React from 'react'
import { Box,Stack,Typography ,Button} from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px',xs: '70px'},
        ml:{sm:'50px'}
    }} position='relative' p='20px'>
    <Typography color='#592617' fontWeight='600' fontSize='28px'>Fitness Club</Typography>

    <Typography fontWeight={700}
    sx={{fontSize: {lg:'44px',xs:'40px'}}} mb='20px' >
    Sweat, Smile <br/> And Gain</Typography>
    <Typography fontSize='22px' lineHeight='35px' mb={3}>Check the most Effective workout routines</Typography>
    <Button variant='contained' color='success' href='#exercises'>Explore Exercises</Button>

    <Typography fontWeight={300}
    color='#ff2625'
    sx={{
      opacity:0.5,
      display:{lg:'block',xs:'none'}
    }}
    fontSize={50}
    >Train Hard! or go home</Typography>
    <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
      
    </Box>
  )
}

export default HeroBanner
