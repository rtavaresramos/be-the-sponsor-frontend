import React , { useState } from 'react'
// import {uniqueId} from 'lodash'

// import {filesize} from 'filesize'

import { Link , useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import imgProfile from '../../assets/img-profile.png'
import './styles.css'

import apiUploader from '../../services/api-uploader'

import  './styles.css'

export default function Uploader() {

    const [file, setFile] = useState()
    const history = useHistory()
    const preview = imgProfile
   function handlePreviewImg(e){

    const file = e.target.files

    setFile(file)

    const data = new FormData()

    data.append('file', file)

    try{

        apiUploader.post('posts', data)
        alert('Imagem cadastrado com sucesso')
  
      history.push('/profile')
      }catch(err){
        alert(`Erro ao tenta fazer o upload, tente novamente mais tarde.`)
      }

    }

    async function handleProfileImg(e){
        e.preventDefault()

        const uploadedFile = file.map( file =>({
        file
        }))
        

    }

    return (
        <div className="container">
            <div className="upload-img-profile-container">
                <div className="drop-container">
                    <img src={preview}alt=""/>
                </div>

                    <div id="photo-preview">

                    </div>

                    <div id="photo-upload">
                        <input type="file" 
                        accpet="image/*" 
                        onChange={e => handlePreviewImg(e)}/>
                    </div>
                    <button type="submit" className="button">Adicionar</button>

                <Link to="/profile" className="back-link">
                    <FiArrowLeft size={16} color="#545454" />
                    Voltar para a area de perfil
                </Link>

            </div>
        </div>
    )
  }

