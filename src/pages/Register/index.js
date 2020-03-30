import React, {useState} from 'react'
import { Link, useHistory } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import './styles.css'

import api from '../../services/api'

import logoImg from "../../assets/logo.png"

export default function Register() {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [wpp, setWpp] = useState()
  const [city, setCity] = useState()
  const [uf, setUf] = useState()

  const history = useHistory()
  async function handleRegister(e){
    e.preventDefault()

    const data = {
      name,
      password,
      email,
      wpp,
      city,
      uf
    }

    
    try{

      api.post('users', data)
      alert('Usuário cadastrado com sucesso')

    history.push('/')
    }catch(err){
      alert(`Erro ao tenta se cadastrar, tente novamente mais tarde.`)
    }
    
  }


  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img className="register-logo" src={logoImg} alt="Be The Sponsors" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar
            o patrocínio perfeito para sua educação.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#55cb88" />
            Voltar para a area de Logon
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome"
            value={name}
            required
            onChange={ e => setName(e.target.value)}
          />
          <input 
            type="password"
            required
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            required
            placeholder="WhatsApp"
            value={wpp}
            onChange={e => setWpp(e.target.value)}
          />
          <div className="input-group">
            <input
              required
              placeholder="Cidade"
              value={city}
              onChange={ e =>setCity(e.target.value)}
            />
            <input
              required
              placeholder="UF"
              style={{width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
