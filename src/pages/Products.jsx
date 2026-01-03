import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const productsList = [
    {
        id: 1,
        name: "Product 1",
        price: 100
    },
    {
        id: 2,
        name: "Product 2",
        price: 200
    },
    {
        id: 3,
        name: "Product 3",
        price: 300
    },
    {
        id: 4,
        name: "Product 4",
        price: 400
    },
    {
        id: 5,
        name: "Product 5",
        price: 500
    },
    {
        id: 6,
        name: "Product 6",
        price: 600
    }
]

const Products = () => {
    const [productsData, setproductsData] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        //define the function
        const fetchProducts = async () => {
            const response = await axios.get("https://dummyjson.com/products")
            setproductsData(response.data.products)
        }

        //call the function
        fetchProducts()
    }, [])


    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            padding: 2
        }}>
            {
                productsData?.map((prod) => {
                    return (
                        <Card>
                            <CardMedia 
                            component="img"
                            src={prod.thumbnail}
                            ></CardMedia>
                            <CardContent>
                                {prod.title}-
                                {prod.price}
                                {prod.category}
                            </CardContent>
                            <CardActions>
                                <Button onClick={()=> navigate("/productdetails",{state: prod})} variant='contained'>Details</Button>
                              </CardActions>
                        </Card>
                    )
                })
            }

        </Box>
    )
}

export default Products