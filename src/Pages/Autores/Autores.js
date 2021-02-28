import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from '../../Components/Header/Header';
import ListaCampo from '../../utils/ListaCampo';
import DataTable from '../../Components/DataTable/DataTable';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';

class Autores extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      nomes: [],
      titulo: 'Autores'
    };
  }


  componentDidMount(){
    ApiService.ListaNomes()
      .then(res => {
        if ( res.message === 'success' ) {
          PopUp.exibeMensagem("success", "Autores listados com sucesso.");
          this.setState({nomes: [...this.state.nomes, ...res.data]});
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao listar os registros."));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h4>Nossas  autoras e autores</h4>
          <ListaCampo dados={ this.state.nomes } campo='nome' />
          <hr/>
          <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']}/>
        </div>
      </Fragment>
    );
  }
}

export default Autores;
