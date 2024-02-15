import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductCard } from "../Components/ProductCard"
import { Button } from 'react-bootstrap';



function Categories() {
    const [Category, setCategory] = useState([])
    const [products, setProducts] = useState([]);

    const api_url = 'https://fakestoreapi.com/products'


    const getProducts = () => {
        // Make a GET request to fetch products using Axios
        fetch(`${api_url}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))

    }
    const getCategories = () => {
        // Make a GET request to fetch products using Axios
        fetch(`${api_url}/categories`)
            .then((response) => response.json())
            .then((data) => setCategory(data))

    }

    const getProductsOnCategory = (categoryName) => {
        console.log(categoryName);
        fetch(`${api_url}/category/${categoryName}`)
            .then(response => response.json())
            .then((data) => setProducts(data))


    }
    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    useEffect(() => {
        // Make a GET request to fetch products using Axios
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                // Handle successful response
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching products:', error);
            });
    }, []); // Empty dependency array to only run once on component mount

    return (
        <div>
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className='text-muted'>Categories</h1>
                        <hr />
                        <Button variant='outline-success' className='' key={products} onClick={() => { getProducts(products) }}>All Products</Button>
                        {
                            Category.map((category) => {
                                return (
                                    <Button variant='outline-success' className='m-2' key={category} onClick={() => { getProductsOnCategory(category) }}>{category}</Button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container">


                <div className="row justify-content-around">
                    {Array.isArray(products) && products.map((product) => (
                        <div className="col-md-3 col-6" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Categories;