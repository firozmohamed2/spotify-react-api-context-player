import React from 'react'
import {useEffect, useState} from "react";
import LoginPage from './LoginPage';
import IndexScreen from './IndexScreen';





function Login() {
   
    const CLIENT_ID = "423cd656ff7d45fc98996a8e82da9d37"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize?"
    const RESPONSE_TYPE = "token"

    const scopes = ["user-library-read", "playlist-read-private"];

const loginEndpoint = `${AUTH_ENDPOINT}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;



const [token, setToken] = useState("")
const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])



useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    


    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)



}, [])




const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
}












  return (
    <div>

{!token ?
                    <LoginPage />
                    : <IndexScreen />  }










    </div>
  )
}

export default Login