import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardGroup } from 'semantic-ui-react';
import ProductService from '../services/productService'

export default function CategoryToProductList() {


    let { categoryName } = useParams()

    const [categoryProducts, setCategoryProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService()
        productService.getBySubCategory_Category_CategoryName(categoryName)
            .then(result => setCategoryProducts(result.data.data))
    }, [categoryName])

    console.log(categoryProducts);

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
