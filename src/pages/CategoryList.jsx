import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import CategoryService from '../services/categoryService'

export default function CategoryList() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        let categoryService = new CategoryService()
        categoryService.getCategories()
            .then(result => setCategories(result.data.data))
            .catch(console.log("başarısız"))
    },[])


    return (
        <div>
            {categories.map((category) => (
                <Menu vertical key={category.id}>
                    <Link to={`/${category.categoryName}`+`/products`}><Menu.Item>{category.categoryName}</Menu.Item></Link>
                </Menu>
            ))}
        </div>
    )
}
