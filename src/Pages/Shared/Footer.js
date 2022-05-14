import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <div style={{
            background: `url(${footer})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className='h-96 flex flex-col justify-center items-center'>
            <footer class="footer p-10">
                <div>
                    <span class="footer-title">Services</span>
                    <a href='/' class="link link-hover">Branding</a>
                    <a href='/' class="link link-hover">Design</a>
                    <a href='/' class="link link-hover">Marketing</a>
                    <a href='/' class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a href='/' class="link link-hover">About us</a>
                    <a href='/' class="link link-hover">Contact</a>
                    <a href='/' class="link link-hover">Jobs</a>
                    <a href='/' class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a href='/' class="link link-hover">Terms of use</a>
                    <a href='/' class="link link-hover">Privacy policy</a>
                    <a href='/' class="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer class="footer footer-center p-4 text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;