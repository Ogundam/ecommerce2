import React from 'react'

function Footer() {
  return (
    <div className='container footer d-flex justify-content-md-between '>
        <div className='position-fixed-bottom start-0'>
            <h6 className='foot fs-6 text expand-md-0 m-2 '>
                <img style={{width: "3rem", height: "3rem"}} src={require("./Images/Lasop Logo.png")} alt="" />
                STORE 
            </h6>
        </div>
        <div>
            <h6 className='position-fixed-bottom end-0 fs-6 text m-2 '>
                Copyright 2022 page DLasop Web
                <img style={{width: "3rem", height: "3rem"}} src={require("./Images/Lasop Logo.png")} alt="" />
             </h6>
        </div>
    </div>
    



  );
}

export default Footer