import React from 'react'
import { Link } from 'react-router-dom';
import { GiSelfLove } from "react-icons/gi";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { useSelector } from 'react-redux';





function Navbar() {

    const totalItem = useSelector((state) => state.totalItem)


  return (

    <div>
        <nav className="navbar navbar-expand-md">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <Link className="navbar-brand" to="/">STORE</Link>
                </Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Whish List <i className='d-inline' ><GiSelfLove /></i>
                            </Link>
                            
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Shopping Bag <i><FaShoppingBag /></i>
                            </Link>
                           
                        </li>

                        <li>
                            <button
                                class="btn btn-primary position-relative"
                            > <i><FaShoppingCart /></i>
                                
                                <span
                                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                                >
                                    {totalItem}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            
                        </li>
            
                    </ul>
                    <form className="d-flex my-2 my-md-0">
                        <input
                            className="form-control me-sm-2"
                            type="text"
                            placeholder="Hi Mario "
                            
                        />
                    </form>
                </div>
            </div>
        </nav>

    </div>



  
  );
}

export default Navbar

