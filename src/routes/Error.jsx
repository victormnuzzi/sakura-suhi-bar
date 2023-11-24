import {  } from 'react';
import baseStyle from './base.module.css';

function Error() {

  return (
    <>
      <section className={`${baseStyle.sectionContainer} ${baseStyle.errorPage}`}>
        <h1>404-Página não encontrada.</h1>
      </section>
    </>
  )
}

export default Error
