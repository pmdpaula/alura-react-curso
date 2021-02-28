import React, { Fragment } from 'react'
import Header from '../../Components/Header/Header';

const Sobre = () => {
  return (
    <Fragment>
      <Header />
      <div className="container mb-10">
        <h4>Sobre</h4>
        <p>Desenvolvido por Pedro de Paula como parte do curso da Alura de desenvolvimento em React.</p>
      </div>
    </Fragment>
  );
}


export default Sobre;