import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeCart } from './Store/Actions/CartAction'
import { NavLink } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';


export const Cart = () => {
    const products = useSelector((state => state.combineCart.products))
    const dispatch = useDispatch()

    var total = 0;
    const itemList = (item) => {
        total = parseFloat((total + item.price).toFixed(2));
        
        return (
            <span>{item.price}</span>
        );
    }
    const handleClose = (item) => {
        dispatch(removeCart(item))
    }

    const cartItems = (product) => {
        return (
            <div className="px-4 my-4 mx-auto shadow rounded-4 py-3" key={product.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(product)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">${product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-4 mx-auto shadow w-75 rounded-4 py-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    }


    return (



        <div className='container  '>
            <div className='row'>

                <div className='col-md-8'>

                    {products.length === 0 && emptyCart()}
                    {products.length !== 0 && products.map(cartItems)}
                </div>
                <div className='col-md-4 mb-3'>
                    <div className='h-5 px-4 my-4 mx-auto shadow w-75 rounded-4 py-3 bg-success-subtle border border-2 border-success' >
                        <h3 >Cart Ckeckout  </h3>
                        <ul className="list-group mb-3 fw-medium p-1">
                            {products.map(itemList) }

                            <li className="list-group-item d-flex justify-content-between mt-2 rounded-2">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    )
}
