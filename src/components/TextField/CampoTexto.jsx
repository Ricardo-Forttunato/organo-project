import './CampoTexto.css';
import PropTypes from 'prop-types';

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoDigitar(evento.target.value);
    }

    const placeholderMod = `${props.placeholder}...`;
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
            value={props.valor}
            onChange={aoDigitado} 
            required={props.obrigatorio} 
            placeholder={placeholderMod} />
        </div>
    );
}

CampoTexto.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    obrigatorio: PropTypes.bool.isRequired,
    valor: PropTypes.string.isRequired,
    aoDigitar: PropTypes.func.isRequired,
};

export default CampoTexto;