import React from 'react'
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import './styles.css'

import logoImg from "../../assets/logo.png"

export default function Register() {
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

        <form onSubmit="">
          <input
            placeholder="Nome"
            value=""
            onChange=""
          />
          <input 
            type="password"
            placeholder="Senha"
            value=""
            onChange=""
          />
          <input
            type="email"
            placeholder="E-mail"
            value=""
            onChange=""
          />
          <input
            placeholder="WhatsApp"
            value=""
            onChange=""
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value=""
              onChange=""
            />
            <input
              placeholder="UF"
              style={{width: 80 }}
              value=""
              onChange=""
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
