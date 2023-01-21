import React, { useState } from 'react';
import './style.scss';
import { FiExternalLink } from 'react-icons/fi';
import { GoThreeBars } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom'
export function Header() {

    const [isOpenNavbar, setIsOpenNavbar] = useState(false)
    console.log(isOpenNavbar)
    function _handleNavbar() {
        setIsOpenNavbar(!isOpenNavbar)
    }
    return (
        <div className="header_Container">
            <div className="header_Content">
                <div className="logoHeader">
                    <img src="https://user-images.githubusercontent.com/59892368/211217236-86d5d9d0-8991-4a65-a29c-60bd65621ced.svg" />
                </div>
                <div className={isOpenNavbar ? "navBar active" : "navBar"} >
                    <a className='close_Button' onClick={_handleNavbar}>
                        {
                            isOpenNavbar ? <GrClose size={50} /> : ''
                        }

                    </a>
                    <div className='nav_Options'>
                        <Link to="/">Home</Link>
                        <Link to="/documentation/gettingStarted">Documentation</Link>
                    </div>
                    <div className="nav_Github">
                        <a href='#'>
                            Github
                            <FiExternalLink />
                        </a>

                    </div>
                </div>
                <div className="navBar_Icon_Mobile">
                    <a onClick={_handleNavbar}>
                        {
                            isOpenNavbar ? '' : <GoThreeBars size={50} />
                        }

                    </a>

                </div>
            </div>
        </div>
    )
}