import React from 'react';
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdMessage } from 'react-icons/md';
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-black text-white p-10">
  <aside>
   
    <h2 className='text-lg font-bold'>CS — Ticket System</h2>
    <p className='text-gray-400'>
   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
 
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Saled</a>
  
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Privacy Policy </a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
    <nav>
    <h6 className="footer-title">Social Links</h6>
    <a href='https://instagram.com' className="link link-hover  flex items-center gap-2"> <FaInstagram />@CS — Ticket System</a>
    <a className="link link-hover flex items-center gap-2" ><CiLinkedin />@CS — Ticket System</a>
    <a className="link link-hover  flex items-center gap-2"><FaFacebook />@CS — Ticket System</a>
     <a className="link link-hover flex items-center gap-2"><MdMessage />support@cst.com</a>
  </nav>
</footer>
 <div>
    <footer className="footer sm:footer-horizontal footer-center bg-black text-gray-100 border-t border-gray-600   p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
 </div>
        </div>
    );
};

export default Footer;