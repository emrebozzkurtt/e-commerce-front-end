import axios from "axios";

export default class SubCategoryService{
    
    getAllSubCategories() {
        return axios.get("http://localhost:8080/api/subcategories/getAllSubCategories");
    }

    getSubCategoriesByCategory_categoryName(categoryName) {
        return axios.get("http://localhost:8080/api/subcategories/getByCategory_CategoryName?categoryName="+categoryName);
    }
}
