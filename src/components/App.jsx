import { useState } from 'react'
import Banner from "./Banner/Banner"
import Formulario from "./Fomulario/Formulario"
import Time from "./Time/Time"
import Rodape from './Rodape/Rodape'
import './index.css'

function App() {
  const times = [
    {
    nome:'Programação',
    corPrimaria: '#57c278',
    corSecundaria: '#d9f7e9',
    },
    {
    nome:'Front-End',  
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF',
    },
    {
    nome:'Data Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2',
    },
    {
    nome:'DevOps',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8',
    },
    {
    nome:'UX e Design',
    corPrimaria: '#DB6EBF',
    corSecundaria: '#FAE9F5',
    },
    {
    nome:'Mobile',
    corPrimaria: '#FFBA05',
    corSecundaria: '#FFF5D9',
    },
    {
    nome:'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF',
    }
  ];

  const [colaboradores, setColaboradores] = useState([])

  const novoColaboradorAdicionado = (colaborador) => {
    // console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner />
      <Formulario 
        lista ={times.map(time => time.nome)}
        colaboradorCadastrado={colaborador => novoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />
      
      
    
    </>
  )
}

export default App
