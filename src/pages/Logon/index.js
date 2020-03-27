import React from 'react'
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.png'
import homeImg from '../../assets/home-banner-2.png'

export default function Logon() {
  return (
      <>
      <div className="logon-container">
          <section className="form">
              <img className="logon-logo" src={logoImg}alt="Be the Sponsor"/>
              <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"/>
                    <input placeholder="Sua senha" type="password"/>
                    <button className="button" type="submit"> Entrar</button>


                <Link to="/register" className="back-link">
                    <FiLogIn size={20} color={'#55cb88'} />
                    Não tenho cadastro
                </Link>
              </form>
          </section>

          <img className="home-banner"src={homeImg} alt="Sponsors"/>

      </div>
      </>
  )
}

