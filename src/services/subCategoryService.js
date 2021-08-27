import axios from "axios";

export default class SubCategoryService{
    
    getSubCategoriesByCategory_categoryName(categoryName) {
        return axios.get("http://localhost:8080/api/subcategories/getByCategory_CategoryName?categoryName="+categoryName);
    }
}
