import "./ListaSuspensa.css";

import PropTypes from "prop-types";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa" required='{props.obrigatorio}'>
      <label>{props.label}</label>
      <select onChange={evento => props.aoDigitar(evento.target.value)} value={props.valor}>
        <option value="">Selecione...</option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

ListaSuspensa.propTypes = {
  itens: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  obrigatorio: PropTypes.bool.isRequired,
  aoDigitar: PropTypes.func.isRequired,
  valor: PropTypes.string.isRequired,
};

export default ListaSuspensa;
