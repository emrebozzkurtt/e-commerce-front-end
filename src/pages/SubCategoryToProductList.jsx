import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardGroup } from 'semantic-ui-react'
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
                                <Card.Header> {subProduct.productName} </Card.Header>
                                <Card.Meta>{subProduct.productHeader}</Card.Meta>
                            </Card.Content>
                        </Card>
                    ))
                }
            </CardGroup>
        </div>
    )
}
