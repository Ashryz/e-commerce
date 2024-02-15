import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../pages/Store/Actions/CartAction";


function ProductDetails() {
    const [product, setProduct] = useState({})
    const params = useParams();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err))
    }, [])

    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const dispatch = useDispatch()
    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addCart(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(removeCart(product))
            setCartBtn("Add to Cart")
        }
    }

    return (
       
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.image} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h3 className="">{product.title}</h3>
                        <hr />
                        <h6 className="text-muted">{product.description}</h6>
                        <h3 className="text-muted">Category : {product.category}</h3>
                        <h2 className="my-4">price : ${product.price}</h2>
                        <button onClick={()=>handleCart(product)} className="btn btn-outline-success my-5 text-center">{cartBtn} <FaShoppingCart className="fs-4"/> </button>
                        
                    </div>
                </div>
            </div>
       

    )
}
export default ProductDetails;