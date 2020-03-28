import React, { useState  } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'


import './styles.css'

import logoImg from '../../assets/logo.png'
import homeImg from '../../assets/home-banner-2.png'

import api from '../../services/api'

export default function Logon() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')


    const history = useHistory()

    async function handleLogon(e){
        e.preventDefault()
        

        try{
           

            const res = await api.post('sessions', { email , password })

            localStorage.setItem('userId', res.data.id)
            localStorage.setItem('userName', res.data.name)

            history.push('/profile')
        } catch(err){
            alert('Senha ou e-mail incorreto')
        }

    }
  return (
      <>
      <div className="logon-container">
          <section className="form">
              <img className="logon-logo" src={logoImg}alt="Be the Sponsor"/>
              <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="Sua senha" type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
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

