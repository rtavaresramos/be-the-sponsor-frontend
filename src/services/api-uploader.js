import axios from 'axios'

const apiUploader = axios.create({
    baseURL: "https://localhost:8000"
})

export default  apiUploader