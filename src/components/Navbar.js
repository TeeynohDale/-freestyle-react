import React from 'react'
import './Navbar.css'
import { Link, animatescroll as scroll } from 'react-scroll'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <Link 
                    activeClass="active"
                    to="banner"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration="700"
                >Banner</Link>
                <Link 
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration="700"
                >About</Link>
                <Link 
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={false}
                    offset={70}
                    duration="700"
                >Footer</Link>
            </ul>
        </div>
    )
}

export default Navbar
