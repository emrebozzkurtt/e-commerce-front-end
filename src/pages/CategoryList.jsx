import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Dropdown, DropdownItem, Menu, MenuItem } from 'semantic-ui-react'
import CategoryService from '../services/categoryService'
import SubCategoryList from './SubCategoryList'
import SubCategoryService from '../services/subCategoryService.js'

export default function CategoryList() {
    
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
        subCategoryService.getAllSubCategories()
            .then(result => setSubcategories(result.data.data))
            .catch(console.log("başarısız"))
    }, [])



    return (
        <div>
            {categories.map((category) => (
                <Menu key={category.id}>
                    <Link to={`/${category.categoryName}`}>
                        <Menu.Item>{category.categoryName}</Menu.Item>
                    </Link>
                    
                    <Dropdown simple>
                        <Dropdown.Menu>
                            {
                                subCategoryy(category.categoryName).map((subCat) => (
                                    
                                    <DropdownItem>{subCat.subcategoryName}</DropdownItem>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            ))}

            {subcategories.map((subCat) => (
                <Menu key={subCat.id}>
                    <Link to={`/${subCat.category.categoryName}`}>
                        <Dropdown simple text={subCat.category.categoryName}>
                            <Dropdown.Menu>
                                <Link to={`/${subCat.subcategoryName}`} ><MenuItem>{subCat.subcategoryName}</MenuItem></Link>
                            </Dropdown.Menu>
                        </Dropdown></Link>
                </Menu>
            ))}
        </div>
    )

    function subCategoryy(categoryName) {
        let subCategoryService = new SubCategoryService()
        return subCategoryService.getSubCategoriesByCategory_categoryName(categoryName)
        .then(result => setSubcategories(result.data.data))
    }

}

