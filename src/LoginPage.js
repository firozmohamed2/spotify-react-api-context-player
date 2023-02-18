import React from 'react'

function LoginPage() {
    const CLIENT_ID = "423cd656ff7d45fc98996a8e82da9d37"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize?"
    const RESPONSE_TYPE = "token"

    const scopes = ["user-library-read", "playlist-read-private"];

const loginEndpoint = `${AUTH_ENDPOINT}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
  return (
    <div> 
       <a href={loginEndpoint}>Login
                        to Spotify Web</a>
     </div>
  )
}

export default LoginPage