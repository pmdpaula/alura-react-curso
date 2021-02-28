import React, { Component } from 'react'


const Campos = props => {
  const linhas = props.dados.map((linha, id) => {

    return (
      <p key={ id }>{linha[props.campo]}</p>
    );
  });

  return (
  <div>{linhas}</div>
  );
}

class ListaCampo extends Component {
  render() {
    const { dados, campo } = this.props;

    return(
      <Campos dados = { dados } campo = { campo } />
    );
  }
}

export default ListaCampo;