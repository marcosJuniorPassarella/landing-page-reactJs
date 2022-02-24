import React from 'react';
import './index.scss'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className="footerContainer">
            <img className='footerImg' src={require('../../assets/Libslide.png')} alt="" />
            <div className="divider"></div>
            <div className="footerLinks">
                <h6>Terms & Conditions</h6>
                <h6>Privacy Policy</h6>
            </div>
            <div className="socialLinks">
                <FaFacebookF className='icon' />
                <FaTwitter className='icon' />
                <FaInstagram className='icon' />
            </div>
        </div>
    )
}
export default Footer;