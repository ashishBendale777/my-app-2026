import { Button, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <>
      <h1>ABOUT PAGE</h1>
      <Typography variant="h3">
        This is the about page of our application. Here you can find information about the purpose of the app, its features, and the team behind its development.
      </Typography>
      <Button variant="contained" color='success'>
        Learn More
      </Button>
    </>
  )
}

export default About