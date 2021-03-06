import axios from 'axios'

export default class ProductService{
   
    getProducts() {
        return axios.get("http://localhost:8080/api/products/getAllProducts");
    }

    getByProductName(productName) {
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName);
    }

    getBySubCategory_Category_CategoryName(categoryName) {
        return axios.get("http://localhost:8080/api/products/getBySubCategory_Category_CategoryName?categoryName="+categoryName);
    }

    getBySubCategory_SubcategoryName(subcategoryName) {
        return axios.get("http://localhost:8080/api/products/getBySubCategory_SubcategoryName?subcategoryName="+subcategoryName);
    }

    getAllProductSortedASC(){
        return axios.get("http://localhost:8080/api/products/getAllProductSortedASC");
    }
    getAllProductSortedDESC(){
        return axios.get("http://localhost:8080/api/products/getAllProductSortedDESC");
    }
}
