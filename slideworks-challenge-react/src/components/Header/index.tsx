import React, { useState } from 'react';
import '../Global/index.scss'
import './index.scss'
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";

const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <header className="headerContainer">
            <div className="logoContainer center">
                <img src={require('../../assets/Logo.png')}
                    className="logo" alt="logoBible " />
            </div>
            <div className="links center">
                <ul className="center">
                    <li className="efeito-hover home">
                        <a href="https://slideworks.cc/#home">Home</a>
                    </li>
                    <li className="efeito-hover">
                        <a href="https://slideworks.cc/#about">About</a>
                    </li>
                    <li className="efeito-hover">
                        <a href="https://slideworks.cc/#services">Features</a>
                    </li>
                    <li className="efeito-hover">
                        <a href="https://slideworks.cc/#services">Pricing</a>
                    </li>
                    <li className="efeito-hover">
                        <a href="https://slideworks.cc/#portfolio">Gallery</a>
                    </li>
                    <li className="efeito-hover">
                        <a href="https://slideworks.cc/#differentials">Team</a>
                    </li>
                    <li>
                        <a href="#">
                            <AiOutlineSearch />
                        </a>
                    </li>
                </ul>
            </div>
            <nav>
                {(toggleMenu) && (
                    <ul className="list">
                        <li className="items">
                            <a href="https://slideworks.cc/#home">Home</a>
                        </li>
                        <li className="items">
                            <a href="https://slideworks.cc/#about">About</a>
                        </li>
                        <li className="items">
                            <a href="https://slideworks.cc/#services">Features</a>
                        </li>
                        <li className="items">
                            <a href="https://slideworks.cc/#services">Pricing</a>
                        </li>
                        <li className="items">
                            <a href="https://slideworks.cc/#portfolio">Gallery</a>
                        </li>
                        <li className="items">
                            <a href="https://slideworks.cc/#differentials">Team</a>
                        </li>
                    </ul>
                )}
                <AiOutlineMenu onClick={toggleNav} className="btn" size={25} />
            </nav>
        </header>
    )
}
export default Header;