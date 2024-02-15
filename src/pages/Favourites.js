
import React from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../Components/ProductCard';


export const Favourites = () => {
    const favourites = useSelector((state => state.combineFavourites.favourites))

    return (

        <div className=" my-3  ">

            <div className="container  ">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="text-muted">Products</h1>
                    </div>
                </div>
                <div className="row  d-flex my-3">
                        {favourites.length > 0 ? (
                            favourites.map((product, index) => (
                                <div className='col-md-3'>
                                <ProductCard product={product} key={`${product.id}-${index}`} />
                                </div>
                            ))
                        ) : (
                            <div className='p-3 col-12  w-100  fs-4 my-3 text-muted'>
                                <p> it's Empty,there isn't any favourite Products ☹️ </p>
                            </div>
                        )}
                </div>


            </div>

        </div>
    );
}