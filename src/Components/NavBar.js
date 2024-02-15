import "./NavBar.css"
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/freshcart-logo.53f7a424c3aedc30a0fb46dc2278137c.svg'
import { FaMoon, FaShoppingCart, FaRegHeart } from "react-icons/fa"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { ThemesAction } from "../pages/Store/Actions/ThemesAction";


function NavBar() {

   

     // Get theme from state and change theme
  const myTheme = useSelector((state) => state.combineTheme.theme)
  const favourites = useSelector((state => state.combineFavourites.favourites))
  const products = useSelector((state => state.combineCart.products))
  const dispatch = useDispatch();
  const themesToggel = () => {
   
    dispatch(ThemesAction(myTheme === "Light" ? "Dark" : "Light"))
  }

    return (

        <Navbar expand="lg" className={`  mb-1 ${myTheme === "Light" ? "bg-body-tertiary shadow-md" : "bg_dark text-white shadow-md"}`} style={{minWidth:"490px"}}>
            <Container fluid >
                <NavLink to={"/"}> <img className={`${myTheme === "Light" ? "bg-body-tertiary shadow-md" : "bg-body-tertiary text-white shadow-md"}`} src={logo} /> </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-1 me-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <NavLink className="navlink " to={"/"}>Home</NavLink>
                        <NavLink className="navlink" to={"/Products"}>Products</NavLink>
                        <NavLink className="navlink" to={"/Categories"}>Categories</NavLink>
                    </Nav>
                    <Nav
                        className="me-auto my-3 my-lg-0  "
                        style={{ maxHeight: '200px', minWidth: '160px' }}

                        navbarScroll
                    >
                        <NavLink className="navlink position-relative m-2 " to={"/Favourites"}>Fav  <FaRegHeart className="text-success" />
                            <span class=" position-absolute top-0 start-25 translate-middle badge rounded-pill bg-success ">{favourites.length}</span>
                        </NavLink>
                        <NavLink className=" navlink position-relative m-2" to={"/Cart"}>Cart <FaShoppingCart className="text-success" />
                            <span class="position-absolute top-0 start-25 translate-middle badge rounded-pill bg-success">{products.length}</span>
                        </NavLink>


                    </Nav>
                    <Nav
                        className="me-auto my-3 my-lg-0  "
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <NavLink className="navlink" to={"/Register"}>Register</NavLink>
                        <NavLink className="navlink" to={"/Login"}>Login</NavLink>
                    </Nav>

                </Navbar.Collapse>



            </Container>
            
                <div className="mt-1 mx-3" onClick={() => themesToggel(myTheme)} style={{ "cursor": "pointer" }}>
                    <FaMoon className="text-success" />
                </div>
                <Form className="d-flex m-auto ">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-1 "
                        aria-label="Search"
                        style={{ minWidth: '150px' }}
                    />
                    <Button variant="outline-success" className="me-2">Search</Button>
                </Form>
                <div className="mt-1 mx-3">
                    <Button variant="outline-success">En</Button>
                </div>
           

        </Navbar>
    );
}
export default NavBar;