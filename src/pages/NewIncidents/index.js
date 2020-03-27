import React from 'react'
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

import './styles.css'

import logoImg from "../../assets/logo.png"

export default function NewIncidents() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img className="new-incident-logo" src={logoImg} alt="Be The Sponsors" />
          <h1>Cadastrar novo curso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um Sponsor para te ajudar
            a realizar os seus sonhos e incrementar sua educação.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#55cb88" />
            Voltar para a home
          </Link>
        </section>

        <form onSubmit="">
          <input
            placeholder="Título do curso"
            value=""
            onChange=""
          />
          <textarea 
            placeholder="Descrição"
            value=""
            onChange=""
          />
          <input
            type="email"
            placeholder="Valor em reais"
            value=""
            onChange=""
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
