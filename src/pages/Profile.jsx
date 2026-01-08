import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'


const Profile = () => {

    const { userData } = useSelector((state) => state.user);
    return (
        <>
            <Typography>Profile</Typography>
            <Typography>Name:{userData?.name}</Typography>
            <Typography>Email:{userData?.email}</Typography>
        </>
    )
}

export default Profile