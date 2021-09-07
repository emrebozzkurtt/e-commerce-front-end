import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import SubCategoryService from '../services/subCategoryService.js'
const SubCategoryList = (props) => {



    let categoryName = props.catName
    
    console.log(props.catName)
    console.log(categoryName)

    const [subcategories, setSubcategories] = useState([])

    useEffect(() => {
        let subCategoryService = new SubCategoryService()
        subCategoryService.getSubCategoriesByCategory_categoryName(categoryName)
            .then(result => setSubcategories(result.data.data))
            .catch(console.log("başarısız altkategori"))
    },[categoryName])

    return (
        <div>
            {subcategories.map((subCategory) => (
                <Dropdown.Menu key={subCategory.id}>
                    <Link className='linkDecor' to={`/${subCategory.subcategoryName}`}>
                        <Dropdown.Item>{subCategory.subcategoryName}</Dropdown.Item>
                    </Link>
                </Dropdown.Menu>
            ))}
        </div>
    )
}
export default SubCategoryList