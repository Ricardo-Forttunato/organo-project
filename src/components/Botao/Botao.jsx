import PropTypes from 'prop-types';
import './Botao.css';

const Botao = (props) => {
    return (
        <button className="botao" >{props.children}</button>
    )
}

Botao.propTypes = {
    children: PropTypes.string.isRequired
};

export default Botao;