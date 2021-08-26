import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import CategoryService from '../services/categoryService';

export default function Categories() {

    const dispatch = useDispatch();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8080/api/categories/getAllCategorie");
            setCategories(response.data);
        }
        fetchData();
    }, [])

    return (
        <div>
            {categories.map( category => (
                <Menu vertical key={category.id}>
                     <Menu.Item>{category.categoryName}</Menu.Item>
                </Menu>
            ))}
        </div>
    )
}
