import {  } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png';
import footerStyle from './footer.module.css';
import { MdEmail as EmailIcon } from "react-icons/md";
import { AiFillInstagram as InstagramIcon, AiFillFacebook as FacebookIcon, AiFillLinkedin as LinkedinIcon } from "react-icons/ai";

function Footer() {

  return (
    <>
      <footer>

        <div className={footerStyle.footerContentContainer}>

          <div className={footerStyle.footerRestaurant}>
            <img src={logo} alt="Logo do restaurante" className={footerStyle.footerLogo}/>
            
            <div className={footerStyle.footerMenu}>
              <h2>Site Links</h2>
              <nav className={footerStyle.menuLinksContainer}>
                <ul>
                  <li><Link to="/" ><span className={footerStyle.linksText}>Home</span></Link></li>
                  <li><Link to="/produtos" ><span className={footerStyle.linksText}>Produtos</span></Link></li>
                  <li><Link to="/login" ><span className={footerStyle.linksText}>Pedido</span></Link></li>
                  <li><Link to="/sobre" ><span className={footerStyle.linksText}>Sobre</span></Link></li>
                </ul>
              </nav>
            </div>
          </div>
        
          <nav>
            <ul className={footerStyle.socialMediaContainer}>
              <li><a href="#"><FacebookIcon size={36}/></a></li>
              <li><a href="#"><InstagramIcon size={36}/></a></li>
              <li><a href="#"><LinkedinIcon size={36}/></a></li>
              <li><a href="#"><EmailIcon size={36}/></a></li>
            </ul>
          </nav>
        </div>
      
        <div className={footerStyle.horizontalLine}>
          <p>&copy; 2023  Sakura Sushi Bar</p>
        </div>
      
      </footer>
    </>
  )
}

export default Footer
