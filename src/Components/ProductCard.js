
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaStar, FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../pages/Store/Actions/FavouritesAcrion';
import { addCart, removeCart } from '../pages/Store/Actions/CartAction';



export const ProductCard = (props, showLink = true) => {
    const { product } = props;
    // console.log(product);

    const dispatch = useDispatch()
    const favourites = useSelector((state => state.combineFavourites.favourites))

    const isItemInFavourites = (item) => {
        return favourites.some((favourite) => favourite.id === item.id);

    }


    const handleToggleClick = (proudect) => {
        isItemInFavourites(product) ? dispatch(removeFavourite(product)) :
            dispatch(addFavourite(proudect));
    }


    const products = useSelector((state => state.combineCart.products))

    const isItemInCart = (item) => {
        return products.some((product) => product.id === item.id);

    }


    const handleToggleCart = (proudect) => {
        isItemInCart(product) ? dispatch(removeCart(product)) :
            dispatch(addCart(proudect));
    }


    return (

        <div className='container'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 my-5   '>
                <div className='col card w-100 rounded-5 position-relative' style={{ height: '600px' }}>
                    <div className='py-3 ' >
                        <img src={product.image} style={{ height: '300px' }} className='w-100 product' alt={product.title} />

                    </div>
                    <div className='d-flex flex-column mt-3 '>

                        <h5>{product.title.split(' ').slice(0, 5).join(' ')}</h5>
                        <Card.Text className='fs-5 fw-bold'>${product.price}</Card.Text>

                        <div className='d-flex justify-content-between'>
                            <p className="card-text d-flex ">
                                <small className="text-muted">
                                    <FaStar className='fs-4 text-warning' />
                                    {product.rating.rate}
                                </small>
                            </p>
                            <NavLink onClick={() => handleToggleCart(product)}>
                                {isItemInCart(product) ? <FaShoppingCart className='fs-4 text-success' /> :
                                    <FaShoppingCart className='fs-5 text-muted' />}
                            </NavLink>
                            <NavLink onClick={() => handleToggleClick(product)}>
                                {isItemInFavourites(product) ? <FaHeart className='fs-4 text-danger ' /> :
                                    <FaRegHeart className='fs-5 text-danger ' />}
                            </NavLink>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            {showLink && <NavLink to={`/Products/${product.id}`} className="w-75 btn btn-success text-decoration-none position-absolute bottom-0 mb-5">Details</NavLink>}

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}










