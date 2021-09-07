import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, CardGroup, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function SubCategoryToProductList() {

    let { subcategoryName } = useParams()

    const [subProducts, setSubProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService()
        productService.getBySubCategory_SubcategoryName(subcategoryName)
            .then(result => setSubProducts(result.data.data))
    }, [subcategoryName])
    
    return (        
        <div>
            <CardGroup>
                {
                    subProducts.map( (subProduct) => (
                        <Card key={subProduct.id}>
                            <Card.Content>
                                <Link to={`/products/${subProduct.productName}`}>
                                <Image
                                    size='tiny'
                                    src='https://img.icons8.com/clouds/100/000000/product.png'
                                /></Link>
                                <Card.Header>{subProduct.productName}</Card.Header>
                                <Card.Description>{subProduct.productHeader}</Card.Description>
                                <br/>
                                <Card.Header>{subProduct.unitPrice} TL</Card.Header>
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
