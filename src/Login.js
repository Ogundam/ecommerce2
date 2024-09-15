import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import api from './api'


function Login() {

    function handleLogin(e){
        e.preventDefault()
        
        let data = new FormData(e.currentTarget)

        api.post("/login/", data)
       .then((res) => {
            localStorage.setItem("id", res.data.id)

            alert("login successful")

            window.location.href = '/'
        })
       .catch((err) => {
          
            alert(err.response.data);
        })
    }
  return (
    <div>
        <Navbar/>
        <div className="border border-danger border-1 rounded-2 mx-auto mt-1 form-control" style = {{ height: "30rem", backgroundColor: "skyblue", width: "26rem", display: "flex", flexDirection:"column", alignItems: "center", justfifyContent: "center" }}>
            <br/>
            <h1><i>Login to our Page</i></h1>
            
            <img style={{width: "9rem", height: "9rem"}} src={require("./Images/Lasop Logo.png")} alt="LOGO" />
            {/* <br/> */}
            <form onSubmit={handleLogin}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "Center", alignItems: "flex-start"}}>
            <div className='d-flex gap-1 align-items-center'>
                <input name='email' style={{width: "20rem"}} className='form-control w-200 h-100' type="text" placeholder="enter your email"></input>
            </div>
            <br/>
            <div className='d-flex gap-1 align-items-center w-100'>
                <input name='password' style={{width: "20rem"}} className='form-control w-200 h-100 ' required type="Alphanumeric" placeholder="enter your password"></input>
            </div>
            <br/>
            </div>
            <span>
                <button  style={{height: "2.3rem", width: "9rem", textAlign: "centre", color: "blue"}} className="d-flex px-5 py-1 form-control">
                    Login
                </button>   
            </span>
            </form>
        </div>





        <Footer/>
    </div>
    
  );
}

export default Login