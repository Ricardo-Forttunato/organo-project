import PropTypes from 'prop-types';
import './Colaborador.css';

const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}  /> 
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

Colaborador.propTypes = {
    nome: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    corDeFundo: PropTypes.string.isRequired
}

export default Colaborador;