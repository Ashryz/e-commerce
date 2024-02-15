
import { FaFacebook,FaTwitter,FaInstagram ,FaHome,FaEnvelope,FaPhone} from "react-icons/fa";
import logo from '../img/freshcart-logo.53f7a424c3aedc30a0fb46dc2278137c.svg'
import {  NavLink, useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function Footer(){

       // Get theme from state and change theme
       const myTheme = useSelector((state) => state.combineTheme.theme)
      const navigate = useNavigate();
      const register =()=>{
        navigate("/Register")
      }
    return (
        <footer className={`text-center text-lg-start  ${myTheme === "Light" ? "bg-body-tertiary text-muted shadow-md" : "bg_dark text-white shadow-md"}`}>
      {/* Section: Social media */}
      <section className="d-flex w-75 mx-auto justify-content-center justify-content-lg-between p-4 " >
        {/* Left */}
        <div className="me-5 d-lg-block" style={{minWidth:"250px"}}>
          <span>Get connected with us on social networks:</span>
        </div>
     
        <div style={{minWidth:'150px'}}>
          <a href="#" className="me-4 text-reset">
            <FaFacebook className="fs-4"/>
          </a>
          <a href="#" className="me-4 text-reset">
            <FaTwitter className="fs-4"/>
          </a>
          <a href="#" className="me-4 text-reset">
            <FaInstagram className="fs-4"/>
          </a>
         
        </div>
      
      </section>
     
      <section className="border-top">
        <div className="container text-center text-md-start mt-5">
       
          <div className="row mt-3">
           
            <div className="col-md-4  mx-auto  mb-4">
              <img src={logo} className={`${myTheme === "Light" ? "bg-body-tertiary shadow-md" : "bg-body-tertiary text-white shadow-md"}`}/>
              <p className="lead"> We Don't Make Ecommerce. We Make Ecommerce Better</p>
            </div>
          
             <div className="col-md-2 col-lg-2 col-xl-2  mb-4  text-center me-5">
           
              <h6 className="text-uppercase fw-bold mb-4">
               <NavLink className='navlink' to={"/"}>Home</NavLink> 
              </h6>
              <h6 className="text-uppercase fw-bold mb-4">
               <NavLink className='navlink' to={"/Products"}>Products</NavLink> 
              </h6>
              <h6 className="text-uppercase fw-bold mb-3">
               <NavLink className='navlink' to={"/Categories"}>Categories</NavLink> 
              </h6>
              <Button onClick={register} variant="success" type="Button" className=" fw-bold m-auto rounded-2" style={{minWidth:"140px"}}>
                Register Now !
            </Button>
            </div> 
           
            <div className="col-md-4  mx-auto mb-md-0 mb-4   " style={{minWidth:"290px"}}>
             
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><FaHome className="fs-4 me-2"/> Cairo, 6-Oct 2, EG</p>
              <p ><FaEnvelope className="fs-4 me-2"/><a className="text-decoration-none text-reset" href="mailto:tarek.ashry9894@outlook.com" > tarek.ashry9894@outlook.com</a> </p>
              <p><FaPhone className="fs-4 me-2"/> <a className="text-decoration-none text-reset" href="tel:01204688855">01204688855</a></p>
             
            </div>
          
          </div>
        
        </div>
      </section>
    
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="text-reset fw-bold text-decoration-none" href="#">FreshCart.com</a>
      </div>
    
    </footer>
    );
}
export default Footer;