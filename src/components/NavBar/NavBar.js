import React from 'react'
import logo from '../../logo.svg';

const NavBar = () => {
    return (
        <div className="App">
            
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img
                            alt="logo"
                            src="https://i.pinimg.com/originals/7d/7c/8a/7d7c8afbe5f6b9bed2dd41bd71437b89.png"
                        />
                    </a>
                    <a
                        href="#kk"
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start"></div>
                    <div className="navbar-end">
                       
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
