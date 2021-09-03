import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetails() {

    let { name } = useParams()
    //bir obje ise {} array ise []
    const [product, setProduct] = useState({})

    useEffect(() => {
        let productService = new ProductService()
        productService.getByProductName(name).then(result => setProduct(result.data.data))
            .catch(console.log("Başarısız"))
    },[name])

    return (
        <div>
            <Card fluid centered extra raised>
                    <Card.Content>
                        <Image src='https://img.icons8.com/clouds/200/000000/product.png'/>
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>{product.productHeader}</Card.Meta>
                        <Card.Header>{product.unitPrice} TL</Card.Header>
                        <Card.Description>{product.productBrand}</Card.Description>
                        <Card.Description>{product.productComment}</Card.Description>
                        <Card.Description>{product?.subCategory?.subcategoryName}</Card.Description>
                        <Card.Description>{product?.supplier?.supplierName}</Card.Description>
                    </Card.Content>
                </Card>
        </div>
    )
}
