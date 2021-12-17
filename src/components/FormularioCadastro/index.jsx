import React, { Component } from "react";
import "./style.css";
class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";

  }

  handlerMudancaTitulo(evento){
    this.titulo = evento.target.value;
  }

  handlerMudancaTexto(evento){
    this.texto = evento.target.value;
  }

  criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto)

  }

  render() {
    return (
      <form className="form-cadastro " onSubmit={this.criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          // handler significa eu vou lidar com as coisas que estão acontecendo
          onChange={this.handlerMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange = {this.handlerMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;