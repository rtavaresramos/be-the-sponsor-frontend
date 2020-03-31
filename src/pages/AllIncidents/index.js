import React, {useEffect, useState} from "react"

import logoImg from "../../assets/logo.png"
import profileImg from "../../assets/img-profile.png"

import { Link, useHistory } from "react-router-dom"
import { FiPower, FiTrash2 } from "react-icons/fi"
import { FaWhatsapp, FaEnvelope, FaPlus, FaCamera } from "react-icons/fa"


import './styles.css'

import api from '../../services/api'


export default function Profile() {

  const [incidents, setIncidents] = useState([])
  const [counter, setCounter] = useState(0)


  const userName = localStorage.getItem('userName')
  const userId = localStorage.getItem('userId')

  const profile = profileImg

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

        <Link to="/incidents/all"onClick={handleAllIncidents} className="link">
          Todos os pedidos
        </Link>
        <Link to="/incidents/my"onClick={handleMyIncidents} className="link">
          Meus pedidos
        </Link>
        <Link to="/incidents/new" className="button-plus">
          <FaPlus size={18} color="#fff"/>
        </Link>
        <Link to="/profile/img/new" className="button-camera">
          <FaCamera size={18} />
        </Link>

        <img src={profile} alt="" className="header-profile-img"/>
        
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#55cb88" />
        </button>
      </header>

      <h1> Pedidos cadastrados</h1>

      <ul>
        {
          incidents.map( incident => (
            <li key={incident.id}>
            <img src={profile} alt="" className="li-profile-img"/>

            <div className="li-header">
            <strong className=" user-name">{incident.user_name}</strong>
            </div>
            <strong >CURSO:</strong>
            <p >{incident.title}</p>

            <strong>MOTIVAÇÃO:</strong>
            <p>{incident.motivation}</p>

            <strong>DESCRIÇÃO DO CURSO:</strong>
            <p>{incident.description}</p>

            <strong>URL:</strong>
            <p><a className="url-link"href={incident.url} target="blank">Link do curso</a></p>

            <strong>PATROCINE ESSE SONHO COM:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency :'BRL'}).format(incident.value)}</p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size="" color="#55cb88" />
            </button>


            <button
              className="contact-icon-1"
              type="button"
              onClick={() => {}}>
              <FaWhatsapp size={20} color="#55cb88" />
            </button>

            <button
            className="contact-icon-2"
              type="button"
              onClick={() => {}}>
              <FaEnvelope size={20} color="#55cb88" />
            </button>

          </li>
          ))
        }
      </ul>
    </div>
  );
}