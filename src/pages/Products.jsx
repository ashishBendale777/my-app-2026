import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { addtoCart } from '../reduxwork/CartSlice'
import { useDispatch } from 'react-redux'


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

    const dispatcher = useDispatch()
    const [selectedCategory, setselectedCategory] = useState("ALL")
    const [filteredProducts, setfilteredProducts] = useState([])

    useEffect(() => {
        //define the function
        const fetchProducts = async () => {
            const response = await axios.get("https://dummyjson.com/products")
            setproductsData(response.data.products)
        }

        //call the function
        fetchProducts()
    }, [])


    useEffect(() => {
        let filteredData = productsData
            .filter((prod) => prod.category === selectedCategory)

        setfilteredProducts(filteredData)

        if (selectedCategory === "ALL") {
            setfilteredProducts(productsData)
        }

    }, [selectedCategory, productsData])


    return (
        <>
            <Box mt={2} mb={2}>
                <Stack direction="row" spacing={2}>
                    <Chip
                        label="ALL"
                        onClick={() => setselectedCategory("ALL")}
                        variant={selectedCategory === "ALL" ? "filled" : "outlined"}

                    />
                    <Chip
                        label="Beauty"
                        onClick={() => setselectedCategory("beauty")}
                        variant={selectedCategory === "beauty" ? "filled" : "outlined"}

                    />
                    <Chip
                        label="Furniture"
                        onClick={() => setselectedCategory("furniture")}
                        variant={selectedCategory === "furniture" ? "filled" : "outlined"}

                    />
                    <Chip
                        label="Groceries"
                        onClick={() => setselectedCategory("groceries")}
                        variant={selectedCategory === "groceries" ? "filled" : "outlined"}

                    />
                </Stack>
            </Box>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 2,
                padding: 2
            }}>
                {
                    filteredProducts?.map((prod) => {
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
                                    <Button onClick={() => navigate("/productdetails", { state: prod })} variant='contained'>Details</Button>
                                    <Button onClick={() => dispatcher(addtoCart(prod))} variant='contained'>Add To Cart</Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }

            </Box>
        </>
    )
}

export default Products