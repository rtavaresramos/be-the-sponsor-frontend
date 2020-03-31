import React, {useState} from 'react'
import { Link, useHistory } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import './styles.css'

import logoImg from "../../assets/logo.png"

import api from '../../services/api'

export default function NewIncidents() {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [motivation, setMotivation] = useState('')
  const [value, setValue] = useState('')


  const history = useHistory()
  const userId = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  async function handleNewIncident(e) {
    e.preventDefault()
    
    const data = {
      title,
      url,
      description,
      motivation,
      value
    }
    try{
      await api.post('/incidents', data, { 
         
        headers : { 
          Authorization : userId,
          Name : userName
      }
    
    })

      history.push('/profile')
  } catch(err){
      alert('Erro ao enviar novo pedido, cheque se preencheu todos os dados e tente novamente')
  }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img className="new-incident-logo" src={logoImg} alt="Be The Sponsors" />
          <h1>Cadastrar novo curso</h1>
          <p>
            Descreva, detalhadamente, o curso que deseja encontrar Sponsors 
            para ajudar a incrementar sua educação.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#55cb88" />
            Voltar para a home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do curso"
            value={title}
            required
            onChange={e => setTitle(e.target.value)}
          />

          <input
            placeholder="Link do curso"
            value={url}
            required
            onChange={e => setUrl(e.target.value)}
          />

          <textarea 
            placeholder="Descrição"
            value={description}
            required
            onChange={e => setDescription(e.target.value)}
          />
          
          <textarea 
            placeholder="Motivação"
            value={motivation}
            required
            onChange={e => setMotivation(e.target.value)}
          />
        
          <input
            placeholder="Valor em reais"
            value={value}
            required
            onChange={e => setValue(parseFloat(e.target.value))}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
