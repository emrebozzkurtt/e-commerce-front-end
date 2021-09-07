import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'
import CategoryService from '../services/categoryService'
import SubCategoryList from './SubCategoryList'
//import SubCategoryService from '../services/subCategoryService.js'

export default function CategoryList() {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        let categoryService = new CategoryService()
        categoryService.getCategories()
            .then(result => setCategories(result.data.data))
            .catch(console.log("başarısız"))
    }, [])

/*
    const [subcategories, setSubcategories] = useState([])

    useEffect(() => {
        let subCategoryService = new SubCategoryService()
        subCategoryService.getAllSubCategories()
            .then(result => setSubcategories(result.data.data))
            .catch(console.log("başarısız"))
    }, [])

  
    const [subcatties, setSubcatties] = useState([])
    let subCategoryService = new SubCategoryService()

    function CategoryInfo(catName) {
       useEffect(() => {
            return subCategoryService.getSubCategoriesByCategory_categoryName(catName)
                .then(result => setSubcatties(result.data.data))
                .catch(console.log("başarısız altkategori"))
        }, [catName])
    }
    */

    return (
        <div>

            {
                categories.map((category) => (
                    <Menu key={category.id}>
                        <Link className='linkDecor' to={`/${category.categoryName}`}>
                            <Dropdown text={category.categoryName}>
                                <SubCategoryList catName={category.categoryName}/>
                            </Dropdown>
                        </Link>
                    </Menu>
                ))
            }
{/*
            {subcategories.map((subCat) => (
                <Menu key={subCat.category.id}>
                    <Link to={`/${subCat.category.categoryName}`}>
                        <Dropdown simple text={subCat.category.categoryName} >
                            <Dropdown.Menu>
                                <Link to={`/${subCat.subcategoryName}`} ><MenuItem>{subCat.subcategoryName}</MenuItem></Link>
                            </Dropdown.Menu>
                        </Dropdown></Link>
                </Menu>
            ))}
*/}
        </div>
    )
    /*
        function subCategoryy(categoryName) {
            let subCategoryService = new SubCategoryService()
            return subCategoryService.getSubCategoriesByCategory_categoryName(categoryName)
            .then(result => setSubcategories(result.data.data))
        }
    */

}

