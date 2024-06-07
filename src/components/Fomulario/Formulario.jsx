import{ useState } from 'react';
import PropTypes from 'prop-types';
import Botao from "../Botao/Botao";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import CampoTexto from "../TextField/CampoTexto";
import './Formulario.css'

const Formulario = (props) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  
  const aoSalvar = (evento) => {  
    evento.preventDefault();
    props.colaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto 
          obrigatorio="true" 
          label="nome" 
          placeholder="Digite seu nome"
          valor={nome}
          aoDigitar={valor => setNome(valor)}
        />
        <CampoTexto 
          obrigatorio='true'
          label='cargo' 
          placeholder="Digite seu cargo"
          valor={cargo}
          aoDigitar={valor =>  setCargo(valor)}
        />
        <CampoTexto 
          label='imagem' 
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoDigitar={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio="true"
          label="Lista"
          itens={props.lista}
          valor={time}
          aoDigitar={valor => setTime(valor)}
         />
        <Botao>Criar Card</Botao>

      </form>
    </section>
  );
};

Formulario.propTypes = {
  colaboradorCadastrado: PropTypes.func.isRequired,
  lista: PropTypes.array.isRequired,
};

export default Formulario;
