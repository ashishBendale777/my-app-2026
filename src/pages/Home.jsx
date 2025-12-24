import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'


const Home = () => {
  const friendName = ["Ankush", "Rohit", "Sanket", "Sujal"]
  const [currentIndex, setcurrentIndex] = useState(0)

  const [currentEmp, setCurrentEmp] = useState(0)
  const employees = [
    { name: "Ankush", age: 24 },
    { name: "Rohit", age: 25 },
    { name: "Sanket", age: 23 },
    { name: "Sujal", age: 26 },
  ]

  const handleNext = () => { }
  const handlePrev = () => {
    setcurrentIndex(currentIndex - 1)
  }

  return (
    <>
      <Typography variant='h2'>
        {friendName[currentIndex]}
      </Typography>
      <Box>
        <Button variant='outlined'
          onClick={() => handlePrev()}>Prev</Button>
        <Button onClick={() => setcurrentIndex(currentIndex + 1)}
          variant='outlined'>Next</Button>
      </Box>

      <Box mt={5}>
        <Typography variant='h4'>Employee Details</Typography>
        <Typography>
          {employees[currentEmp].name} - {employees[currentEmp].age} years
        </Typography>
      </Box>
    </>
  )
}

export default Home