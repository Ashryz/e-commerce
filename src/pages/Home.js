import SlickProducts from "../Components/SlickProducts";
import MainSlider from "../Components/MainSlider";
import Products from "./Products";
import ServiceCard from "../Components/ServiceCard";
import img1 from '../img/9.png'
import img2 from '../img/10.png'
import img3 from '../img/11.png'


function Home() {
    return (
        <div className="mb-4" >
            <div className="mb-4">
                <MainSlider />
            </div>

            <div className="container-fluid w-75">
                <h2 className=""> Some Popular <span className="text-success">Products</span> </h2>
                <SlickProducts />
            </div>

            {/* <div className="container-fluid " >
                <h2 className=""> Our <span className="text-success">Products</span> </h2>

                <Products />

            </div> */}

            <div className="m-5">
                <h2 className="">Services to help you shop</h2>
                <div className="container-fluid pt-5 pb-3 m-auto" id="portfolio">
                    <div className="container">


                        <div className="row portfolio-container justify-content-center ">
                            <ServiceCard title="Home Delivery Options" description="Fastest delivery around to enjoy time " img={img1} />
                            <ServiceCard title="Online Payment Process" description="Feel comfartable and pay your shoping esay" img={img2}/>
                            <ServiceCard title="Asked questions" description="Give us your feedback you on of us welcome in our home" img={img3}/>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Home;