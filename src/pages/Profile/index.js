import React, {useEffect} from "react";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import './styles.css'

import api from '../../services/api'


export default function Profile() {
  const userName = localStorage.getItem('userName')
  return (
    <div className="profile-container">
      <header>
        <img className="logo"src={logoImg} alt="Be The Hero" />
        <span>Bem vindo(a), {userName}</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo Curso
        </Link>

        <button type="button" onClick="">
          <FiPower size={18} color="#55cb88" />
        </button>
      </header>

      <h1> Cursos cadastrados</h1>

      <ul>
        
          <li key="">
            <strong>CURSO:</strong>
            <p>acoiddocndosjnisajndifdsbn</p>
            
            <strong>MOTIVAÇÃO:</strong>
            <p>acoiddocndosjnisajndifdsbn</p>

            <strong>DESCRIÇÃO DO CURSO:</strong>
            <p>oaodifjodijfodaisjfsado saofidjfosiajd safodiajfosaidjsao fsaodisjadoijasd</p>

            <strong>VALOR:</strong>
            <p>R$ 120,00</p>

            <button
              type="button"
              onClick="">
              <FiTrash2 size="" color="#55cb88" />
            </button>
          </li>

      </ul>
    </div>
  );
}