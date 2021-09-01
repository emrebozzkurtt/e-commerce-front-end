import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import CategoryService from '../services/categoryService'
import SubCategoryList from './SubCategoryList'
import SubCategoryService from '../services/subCategoryService.js'

export default function CategoryList() {

    let {categoryName} = useParams()

    const [categories, setCategories] = useState([])

    useEffect(() => {
        let categoryService = new CategoryService()
        categoryService.getCategories()
            .then(result => setCategories(result.data.data))
            .catch(console.log("başarısız"))
    }, [])

    const [subcategories, setSubcategories] = useState([])

    useEffect(() => {
        let subCategoryService = new SubCategoryService()
        subCategoryService.getSubCategoriesByCategory_categoryName(categoryName)
            .then(result => setSubcategories(result.data.data))
            .catch(console.log("başarısız"))
    }, [categoryName])

    console.log("dfa "+categoryName)
    return (
        <div>
            {categories.map((category) => (
                <Menu key={category.id}>
                    <Link to={`/${category.categoryName}`}>
                        <Menu.Item>{category.categoryName}</Menu.Item>
                    </Link>
                    <Dropdown>
                        {
                            subcategories.map((subCategory) => (
                                <Dropdown.Menu key={subCategory.id}>
                                    <Dropdown.Item>{subCategory.subcategoryName}</Dropdown.Item>
                                </Dropdown.Menu>
                            ))
                        }
                    </Dropdown>
                </Menu>
            ))}
        </div>
    )
}
