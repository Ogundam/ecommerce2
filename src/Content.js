import React, { useEffect, useState } from 'react'
import api from './api';
import { addtocart } from './Redux/cartslice';
import { useDispatch } from 'react-redux';


function Content() {

    const [foods, setfoods] = useState([])

    useEffect(() => {

        api.get("/allfoods/")
        .then((res) => setfoods(res.data))
        .catch((err) => console.log(err))
    }, [])

    const dispatch = useDispatch()

  return (
    <div>
        <div className='cont d-flex flex-row justify-content-evenly align-items-center text-bg-dark text-light mt-3 text-secondary p-2 fs-4 text '>
            <p>50% OFF</p>
            <p>Free Shopping and returns</p>
            <p>Different paying method</p>
        </div>
    
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img style={{ width:"50rem", height:"35rem"}} src={require("./Images/shoe4.jpeg")} className="d-block w-100 img-fluid img-thumbnail" alt="Shoe 1 Image" />
                </div>
                <div className="carousel-item">
                <img style={{ width:"50rem", height:"35rem"}} src={require("./Images/shoe5.jpeg")} className="d-block w-100 img-fluid img-thumbnail" alt=" Shoe 2 Image"/>
                </div>
                <div className="carousel-item">
                <img style={{ width:"50rem", height:"35rem"}} src={require("./Images/shoe3.jpeg")} className="d-block w-100 img-fluid img-thumbnail" alt="..."/>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> 
        <div style={{marginLeft: "18rem"}} className='d-flex flex-row gap-2 align-items-center  mt-2 mx-8 '>
            <h5 className="border border-1 border-black p-1 rounded-1 h-3 w-3 ">HOODIES</h5>
            <h5 className="border border-1 border-black p-1 rounded-1 h-3 w-3">DRESSES</h5>
            <h5 className="border border-1 border-black p-1 rounded-1 h-3 w-3">SUITES</h5>
            <h5 className="border border-1 border-black p-1 rounded-1 h-3 w-3">SHOES</h5>
            <h5 className="border border-1 border-black p-1 rounded-1 h-3 w-3">T-SHIRTS</h5>
            <h5 className="border border-1 border-black p-1 rounded-1 h-3 w-3">JEANS</h5>
            <h5 className="border border-1 border-black p-1 rounded-1 h-3 w-3">JACKETS</h5>
        </div> 

        <div>
            <h5 className='border border-1 border-bg-black text-bg-dark text-center'>SALES UP TO 50%</h5>
        </div>
        <div>
            <img className='img-fluid mx-auto d-block rounded-2' src={require("./Images/tshirtshanged.webp")} alt="HANGER SHIRTS" />
        </div>
        <div>
            <h5 className='border border-1 border-bg-black text-bg-dark text-center mt-2'>SUMMER T-Shirt SALES 30%</h5>
        </div>

        <div className="container-fluid">
        <div className='d-flex flex-row gap-3 justify-content-center align-items-center p-2 bg-white mt-2 '>
           
           {
                foods?.map((food) => (
                    <div className='card p-2 bg-dark-subtle'>
                    <img className='card img-fluid' style={{ width:"20rem", height:"10rem"}} src={`http://localhost:8000/${food?.image}`} alt="T-Shirt1" /> 
                    <h3>{food?.title}</h3>
                    <p>{food?.description}</p>
                    {/* <h1>{food?.image}</h1> */}
                    <span>
                        <h4>{food?.price}</h4>
                        
                        <h4 onClick={() => dispatch(addtocart(food))}>ADD TO CART</h4>
                    </span>
                    </div >
                
                ))
           }
                
            
        </div>

        <div className='d-flex flex-row gap-3 justify-content-center align-items-center p-2 bg-white mt-2'>
            <div className='card p-2 bg-dark-subtle'>
                <img className='card img-fluid' style={{ width:"20rem", height:"10rem"}} src={require("./Images/persontrshirt1.webp")} alt="T-Shirt1" /> 
                <h3>Causual T-Shirt</h3>
                <p>Fashion never stops.There is always the new <br />project the new opportuniy. The important <br />thing is to take your timeand not get stressed. <br /> I just want to do what I do</p>
                <span>
                    <h4>Size left: M</h4>
                    <h4>Color </h4>
                    <h4>ADD TO CART</h4>
                </span>
            </div>
           
    
        </div>
        </div>

        <hr/>

    </div>
  );
}

export default Content