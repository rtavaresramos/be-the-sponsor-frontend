import React, {useEffect, useState} from "react";
import logoImg from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import './styles.css'

import api from '../../services/api'


export default function Profile() {

  const [incidents, setIncidents] = useState([])
  const [counter, setCounter] = useState(0)

  const userName = localStorage.getItem('userName')
  const userId = localStorage.getItem('userId')


  useEffect(()=>{

    api.get('/profile', {
      headers : {
        Authorization : userId
      }
    }).then(res => {
      setIncidents(res.data)
    })

  },[userId, counter])


  async function handleDeleteIncident(id) {

    try{
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization : userId
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id))
    }catch(err){
      alert('Erro ao deletar o caso, tente novamente ')
    }
     
  }
  async function handleAllIncidents(){

    const res = await api.get('incidents')

    setIncidents(res.data)
    
  }

  async function handleMyIncidents(){

    setCounter(counter + 1)

  }
  function handleLogout(){
    localStorage.clear()

    history.push('/')
  }
  const history = useHistory()
  return (
    <div className="profile-container">
      <header>
        <img className="logo"src={logoImg} alt="Be The Hero" />
        <span>Bem vindo(a), {userName}</span>

        <Link onClick={handleAllIncidents} className="link">
          Todos os pedidos
        </Link>
        <Link onClick={handleMyIncidents} className="link">
          Meus pedidos
        </Link>
        <Link to="/incidents/new" className="button">
          Cadastrar novo Pedido
        </Link>

        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#55cb88" />
        </button>
      </header>

      <h1> Pedidos cadastrados</h1>

      <ul>
        {
          incidents.map( incident => (
            <li key={incident.id}>
            <strong className="user-name">{incident.user_name}</strong>


            <strong>CURSO:</strong>
            <p>{incident.title}</p>
            
            <strong>MOTIVAÇÃO:</strong>
            <p>{incident.motivation}</p>

            <strong>DESCRIÇÃO DO CURSO:</strong>
            <p>{incident.description}</p>

            <strong>URL:</strong>
            <p><a className="url-link"href={incident.url} target="blank">Link do curso</a></p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency :'BRL'}).format(incident.value)}</p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size="" color="#55cb88" />
            </button>
          </li>
          ))
        }
      </ul>
    </div>
  );
}