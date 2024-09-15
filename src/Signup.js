import React from 'react'
import Navbar from './Navbar';
// import { FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaWhatsappSquare } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
import Footer from "./Footer" 
import api from './api';

function Signup() {
  

  function handleSignup(e){
    e.preventDefault()
    
    let data = new FormData(e.currentTarget)

    api.post("/signup/", data)
    .then((res) => {
      window.location.href = "/login"
    })
    .catch((err) => {
      for(let key in err.response.data){
        alert(key + ": " + err.response.data[key])
      }
    })
    // .finally(() => {})
      
  }
  return (
    <div >
      <Navbar/>
      <br/>
      <div className='border border-primary border-2 rounded-5 px-5 mx-auto ' style={{display:"flex", height: "38rem", width: "28rem",flexDirection: "column", justifyContent: "center", alignContent: "center", backgroundColor: "grey", marginBottom: "2rem", marginTop: "1rem"}}>
        <div className='' style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <img style={{width: "10rem", height: "10rem"}} src={require("./Images/Lasop Logo.png")} alt="LOGO" />
          <h1 className='fs-2' ><i>Sign up for our Page</i></h1>
        </div>
        <br/>
        <form onSubmit={handleSignup}>
        <div className='d-flex gap-1'>
          {/* <label for="">first_name</label> */}
          <input name='first_name' className='form-control' style={{width: "20rem", height: "2.5rem"}} placeholder="enter your first name"></input>
        </div> 
        <br/>
        <div className='d-flex gap-1'>
          {/* <label for="">last_name</label> */}
          <input name='last_name' className='form-control' style={{width: "20rem", height: "2.5rem"}} placeholder="enter your last name"></input>
        </div> 
        <br/>
        <div className='d-flex gap-1'>
          {/* <label for="">Email</label> */}
          <input name='email' className='form-control' style={{width: "20rem", height: "2.5rem"}} placeholder="enter your email"></input>
        </div> 
        <br/>  
        <div className='d-flex gap-1'>
          {/* <label for="">Password</label> */}
          <input name='password' className='form-control' style={{width: "20rem", height: "2.5rem"}}  placeholder="Not more than 8 Alphanueric character"></input>
        </div>
        <br/>
        <div className='d-flex gap-1 rounded-1'>
          {/* <label for="">Photo</label> */}
          <input name='profile' className='mx-auto ' style={{width: "16rem", height: "2rem"}} type='file' accept="image/*"/>
        </div>
        <br/>
        <button style={{height: "2.3rem", width: "9rem", textAlign: "centre", color: "blue"}} className="d-flex px-5 py-1 form-control">
          SIGNUP
        </button>
        </form>
      </div>
    
      <Footer/>
    </div>
  );
}

export default Signup