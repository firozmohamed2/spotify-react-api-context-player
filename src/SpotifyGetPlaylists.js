import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'
import SongsList from "./SongsList";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
const PLAYLISTS_SONGS_ENDPOINT = "https://api.spotify.com/v1/playlists/1eoedKDASUcJSrver9xVUx/tracks";


const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});
  const [tracks, setTracks] = useState({})

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const handleGetPlaylists = () => {
    axios
      .get(PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log(response.data.items[0].id);
        console.log(response.data.items[0].images[0].url)
      })
      .catch((error) => {
        console.log(error);
      });
  };







   

  const handleGetSongs = () => {
    axios
      .get(PLAYLISTS_SONGS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setTracks(response.data);
        console.log(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
















  function doThis(item){
    console.log(item.id);
    <SongsList />
  }


  

  return (
    <>
      <button onClick={handleGetSongs}>Get Playlists</button>
      <SongsList />
      {data?.items ? data.items.map((item) => <div 
      onClick={() => doThis(item)} 
      className="playlist_card">
      <p>{item.name}</p> 
      <img src={item.images[0].url} className="playlist-img"></img> </div> ) : null}

     
      
    </>
  );
};

export default SpotifyGetPlaylists;