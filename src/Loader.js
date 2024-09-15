import React from 'react';

function Loader() {
  return (
    <div style={{height: "100vh", display:"flex", alignItems: "center", justifyContent: "center"}}>
        <img style={{ width:"5rem", height: "5rem"}} src={require("./Images/Lasop Logo.png")} alt="" />
    </div>
  )
}

export default Loader