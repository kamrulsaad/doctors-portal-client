import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <div style={{
            background: `url(${footer})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className='h-96 flex flex-col justify-center items-center'>
            <footer className="footer p-10">
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Design</a>
                    <a href='/' className="link link-hover">Marketing</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                    <a href='/' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 text-base-content">
                <div>
                    <p>Copyright © {year} - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;