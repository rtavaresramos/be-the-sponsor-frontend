import React from 'react'

import './styles.css'

import logoImg from '../../assets/logo.png'
import homeImg from '../../assets/home-banner-2.png'

export default function Logon() {
  return (
      <>
      <div className="logon-container">
          <section className="form">
              <img className="logo" src={logoImg}alt="Be the Sponsor"/>
              <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"/>
                    <input placeholder="Sua senha" type="password"/>
                    <button className="button" type="submit"> Entrar</button>


                    <span>
                    <i className="fas fa-sign-in-alt fa-2x"></i>
                    <a href="/register">Não tenho cadastro</a>
                    </span>
              </form>
          </section>

          <img className="home-banner"src={homeImg} alt="Sponsors"/>

      </div>
      </>
  )
}

