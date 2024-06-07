import PropTypes from 'prop-types';
import Colaborador from '../Colaborador/Colaborador';
import './Time.css'

const Time = (props) => {

    const fundo = {backgroundColor: props.corSecundaria };
    const destaque = {borderColor: props.corPrimaria };
    const nomeTimes = props.nome;

    return(
        props.colaboradores.length > 0 ? <section className='time'style={fundo}>
            <h3 style={destaque}>{nomeTimes}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador) => {
                    return <Colaborador 
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                    />
                })}
            </div>
        </section> : null

        /* opção ao if ternário é usar o && para criar uma renderização condicional:

        props.colaboradores.length > 0 && <section className='time'style={fundo}>
            <h3 style={destaque}>{nomeTimes}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador) => {
                    return <Colaborador 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                    />
                })}
            </div>
        </section>;
        */
    )
}

Time.propTypes = {
    nome: PropTypes.string.isRequired,
    corSecundaria: PropTypes.string.isRequired,
    corPrimaria: PropTypes.string.isRequired,
    colaboradores: PropTypes.array.isRequired
}

export default Time;