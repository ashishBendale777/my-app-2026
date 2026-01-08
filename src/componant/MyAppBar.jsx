import { AppBar, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyAppBar = () => {
    const navigate = useNavigate()

    return (
        <AppBar>
            <List sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
            }}>
                <ListItem onClick={() => navigate('/') } sx={{ cursor: "pointer" }}>
                    <ListItemText>Home</ListItemText>
                </ListItem>

                <ListItem onClick={() => navigate('/about')} sx={{ cursor: "pointer" }}>
                    <ListItemText>About</ListItemText>
                </ListItem>

                <ListItem onClick={() => navigate('/contact')} sx={{ cursor: "pointer" }}>
                    <ListItemText>Comtact</ListItemText>
                </ListItem>

                
                <ListItem onClick={() => navigate('/profile')} sx={{ cursor: "pointer" }}>
                    <ListItemText>Profile</ListItemText>
                </ListItem>

            </List>
        </AppBar>
    )
}

export default MyAppBar