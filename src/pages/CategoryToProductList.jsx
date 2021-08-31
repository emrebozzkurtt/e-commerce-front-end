import React, { useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom';
import { Button, Card, CardGroup, Image } from 'semantic-ui-react';
import ProductService from '../services/productService'

export default function CategoryToProductList() {


    let categoryName = useParams()

    const [categoryProducts, setCategoryProducts] = useState([])
    
        //object Object olarak geliyor ?
    console.log("dsa "+categoryName);

    useEffect(() => {
        let productService = new ProductService()
        productService.getBySubCategory_Category_CategoryName(categoryName)
            .then(result => setCategoryProducts(result.data.data))
    }, [])

    return (
        <div>
            <CardGroup>
                {
                    categoryProducts.map( (categoryProduct) => (
                        <Card key={categoryProduct.id}>
                            <Card.Content>
                                <Card.Header> {categoryProduct.productName} </Card.Header>
                                <Card.Meta>{categoryProduct.productHeader}</Card.Meta>
                            </Card.Content>
                        </Card>
                    ))
                }
            </CardGroup>
        </div>
    )
}
