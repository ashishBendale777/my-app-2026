import { Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const prodData = useLocation().state
    return (
        <>
            <Typography variant='h4'>Product Details Page</Typography>
            <Typography variant='h6'>{prodData?.title}</Typography>
            <Typography variant='h6'>{prodData?.price}</Typography>
        </>
    )
}

export default ProductDetails