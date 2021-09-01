import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import SubCategoryService from '../services/subCategoryService.js'
export default function SubCategoryList() {

    let categoryName = useParams()

    const [subcategories, setSubcategories] = useState([])

    useEffect(() => {
        let subCategoryService = new SubCategoryService()
        subCategoryService.getSubCategoriesByCategory_categoryName(categoryName)
            .then(result => setSubcategories(result.data.data))
            .catch(console.log("başarısızzz"))
    },[categoryName])

    return (
        <div>
            <Dropdown>
            {subcategories.map((subCategory) => (
                    <Dropdown.Menu key={subCategory.id}>
                        <Dropdown.Item>{subCategory.subcategoryName}</Dropdown.Item>
                    </Dropdown.Menu>
            ))}
            </Dropdown>
        </div>
    )
}