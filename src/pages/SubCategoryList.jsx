import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import SubCategoryService from '../services/subCategoryService.js'
export default function SubCategoryList() {

    let { catName } = useParams();

    const [subcategories, setSubcategories] = useState([])

    useEffect(() => {
        let subCategoryService = new SubCategoryService()
        subCategoryService.getSubCategoriesByCategory_categoryName()
            .then(result => setSubcategories(result.data.data))
            .catch(console.log("başarısız"))
    })

    return (
        <div>
            {subcategories.map((subCategory) => (
                <Dropdown key={subCategory.id}>
                    <Dropdown.Item>{subCategory.subcategoryName}</Dropdown.Item>
                </Dropdown>
            ))}
        </div>
    )
}