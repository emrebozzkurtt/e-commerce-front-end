import React, { useState, useEffect } from 'react'
import { Button, Card, Image } from 'semantic-ui-react';
import ProductService from '../services/productService'

export default function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts()
            .then(result => setProducts(result.data.data))
            .catch(console.log("Başarısız"))
    })

    return (
        <div>
            <Card.Group>
                {
                    products.map((product) => (
                        <Card key={product.id}>
                            <Card.Content>
                                <Image
                                    size='tiny'
                                    src='https://img.icons8.com/clouds/100/000000/product.png'
                                />
                                <Card.Header>{product.productName}</Card.Header>
                                <Card.Description>{product.productHeader}</Card.Description>
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

            </Card.Group>
        </div>
    )
}
