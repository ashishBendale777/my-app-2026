import { Repeat } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, decreaseQuantity, increaseQuantity } from '../reduxwork/CartSlice'


const Cart = () => {
    const { cartItems, totalAmount } = useSelector((state) => state.cart)
    const dispatcher = useDispatch()

    dispatcher(calculateTotal())
    return (
        <>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 5,
                padding: 2
            }}>
                {
                    cartItems?.map((item) => {
                        return (
                            <Card>
                                <CardMedia
                                    component="img"
                                    src={item.thumbnail}
                                ></CardMedia>
                                <CardContent>
                                    {item.title}-
                                    {item.price}
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => dispatcher(increaseQuantity({ prodid: item.id }))} variant='outlined'>+</Button>
                                    {item.quantity}

                                    <Button onClick={() => dispatcher(decreaseQuantity({ prodid: item.id }))} variant='outlined'>-</Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </Box>
            <Typography variant='h4' sx={{ textAlign: "center" }}>=
                Total Amount:{Math.round(totalAmount)}
            </Typography>
        </>
    )
}

export default Cart