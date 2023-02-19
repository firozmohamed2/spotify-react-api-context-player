import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'


function SongsList() {
  const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
const PLAYLISTS_SONGS_ENDPOINT = "https://api.spotify.com/v1/playlists/1eoedKDASUcJSrver9xVUx/tracks";

const [playlists, setPlaylists] = useState([])
const [token, setToken] = useState("")

useEffect(() => {
  if (localStorage.getItem("token")) {
    setToken(localStorage.getItem("token"));

  }
}, []);

const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])

    // console.log("List")


    const searchArtists = async (e) => {
      e.preventDefault()
      const {data} = await axios.get("https://api.spotify.com/v1/search", {
          headers: {
              Authorization: `Bearer ${token}`
          },
          params: {
              q: searchKey,
              type: "artist"
          }
      })
  
      setArtists(data.artists.items)
      console.log(artists)
      renderA();


  }


  function renderA() {
    console.log("started")
    return artists.map(artist => (
        <div key={artist.id}>
           
            {artist.name}
        </div>
    ))
  }
  
  const renderArtists = () => {
      return artists.map(artist => (
          <div key={artist.id}>
              {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
              {artist.name}
          </div>
      ))
  }


  return (
    <div>
       <form onSubmit={searchArtists}>
                        <input type="text" className="input1" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>


                    

                    

    </div>
  )
}

export default SongsList