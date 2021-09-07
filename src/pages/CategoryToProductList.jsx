import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Button, Card, CardGroup, Image } from 'semantic-ui-react';
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
                    categoryProducts.map((categoryProduct) => (
                        <Card key={categoryProduct.id}>
                            <Card.Content>
                                <Link to={`/products/${categoryProduct.productName}`}><Image
                                    size='tiny'
                                    src='https://img.icons8.com/clouds/100/000000/product.png'
                                /></Link>
                                <Card.Header>{categoryProduct.productName}</Card.Header>
                                <Card.Description>{categoryProduct.productHeader}</Card.Description>
                                <br/>
                                <Card.Header>{categoryProduct.unitPrice} TL</Card.Header>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>Sepete Ekle</Button>
                                    <Button basic color='red'>Çıkar</Button>
                                </div>
                            </Card.Content>
                        </Card>
                    ))
                }
            </CardGroup>
        </div>
    )
}
