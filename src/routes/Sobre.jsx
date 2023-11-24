import {  } from 'react';
import FotoVictor from '../assets/img/foto-victor.jpeg'
import FotoHenri from '../assets/img/foto-henri.jpeg'
import baseStyle from './base.module.css'
import sobreStyle from './sobre.module.css'
import { AiFillLinkedin as LinkedinIcon, AiFillGithub as GithubIcon } from "react-icons/ai";


function Sobre() {

  return (
    <>
      <section className={`${baseStyle.sectionContainer} ${sobreStyle.sobreContainer}`}>

      <h1>Conheça a Equipe</h1>

      <div className={sobreStyle.cardsContainer}>

        <div className={sobreStyle.cardContainer}>
          <div className={sobreStyle.photoContainer}>
            <img src={FotoVictor} alt="Foto do Victor" />
            <div className={sobreStyle.overlay}>
              <a href="https://www.linkedin.com/in/victormnuzzi/" target='_blank' rel="noopener noreferrer" className={sobreStyle.socialMediaIcon} id={sobreStyle.linkedinIcon}><LinkedinIcon size={60}/></a>
              <a href="https://github.com/victormnuzzi" target='_blank' rel="noopener noreferrer" className={sobreStyle.socialMediaIcon} id={sobreStyle.githubIcon}><GithubIcon size={60}/></a>
            </div>
          </div>
          <h2>Victor Marcondes Nuzzi</h2>
        </div>

        <div className={sobreStyle.cardContainer}>
          <div className={sobreStyle.photoContainer}>
            <img src={FotoHenri} alt="Foto do Henri" />
            <div className={sobreStyle.overlay}>
              <a href="https://www.linkedin.com/in/henri-lopes-b54b6720a/" target='_blank' rel="noopener noreferrer" className={sobreStyle.socialMediaIcon} id={sobreStyle.linkedinIcon}><LinkedinIcon size={60}/></a>
              <a href="https://github.com/henrilopes1" target='_blank' rel="noopener noreferrer" className={sobreStyle.socialMediaIcon} id={sobreStyle.githubIcon}><GithubIcon size={60}/></a>
            </div>
          </div>
          <h2>Henri de Oliveira Lopes</h2>
        </div>

      </div>

      </section>
    </>
  )
}

export default Sobre
