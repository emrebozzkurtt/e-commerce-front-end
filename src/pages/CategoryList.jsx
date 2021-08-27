import React, { useEffect, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import CategoryService from '../services/categoryService'
import SubCategoryList from './SubCategoryList'

export default function CategoryList() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        let categoryService = new CategoryService()
        categoryService.getCategories()
            .then(result => setCategories(result.data.data))
            .catch(console.log("başarısız"))
    })

    return (
        <div>
            {categories.map((category) => (
                <Menu vertical key={category.id}>
                    <Menu.Item>{category.categoryName}
                        <SubCategoryList></SubCategoryList>
                    </Menu.Item>
                </Menu>
            ))}
        </div>
    )
}
