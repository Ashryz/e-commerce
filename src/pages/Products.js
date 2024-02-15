import { ProductCard } from "../Components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";




function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <div className=" my-4  ">

            <div className="container  ">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-muted">Products</h1>
                    </div>
                    <div className="row justify-content-around my-3">
                        {
                            products.map((product) => {

                                return (
                                    <div className="col-md-3" key={product.id}>
                                        <ProductCard product={product} />
                                    </div>
                                )


                            })
                        }
                    </div>

                </div>


            </div>

        </div>
    );
}
export default Products;