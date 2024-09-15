import React, { useEffect, useState } from 'react'
import api from './api'
import { useParams } from 'react-router-dom'


function Verify() {

    const { id, otp } = useParams()

    const[status, setstatus] = useState(false)

    useEffect(() => {

        api.get(`/verify/${id}/${otp}`)
        .then((res) => {
            alert("account verified")
            window.location.href = "/login"
        })
        .catch((err) => alert(err.response.data))
        .finally(() => setstatus(true))
    }, [])

    
  return (
    <div>
        {status == false && "loading..........."}
    </div>
  )
}

export default Verify