import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Home.css';
import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import Form from '../../Components/Formulario/Formulario';
import PopUp from '../../utils/PopUp';
import ApiService from '../../utils/ApiService';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autores: []
    };
  }


  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if ( res.message === 'success' ) {
          this.setState({ autores:[...this.state.autores, autor]});
          PopUp.exibeMensagem("success", "Autor adicionado com sucesso.");
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao criar um registro."));
  }
  

  removeAutor = id => {
    const { autores } = this.state;
    const autoresAtualizado = autores.filter(autor => {
      return autor.id !== id;
    })

    
    ApiService.RemoveAutor(id)
      .then(res => {
        if ( res.message === 'deleted' ) {
          this.setState({ autores : [...autoresAtualizado]});
          PopUp.exibeMensagem("success", "Autor Removido com sucesso.");
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao remover um registro."));
  }


  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        if ( res.message === 'success' ) {
          this.setState({autores: [...this.state.autores, ...res.data]})
        }
      })
      .catch(err => PopUp.exibeMensagem("error", "Erro na comunicação com a API ao listar os registros."));
  }


  render() {
    ApiService.ListaLivros()
      .then(res => console.table(res.data)
    );

    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h4>Casa do Código</h4>
          <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
          <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
        </div>
      </Fragment>
    );
  }
}

export default Home;
