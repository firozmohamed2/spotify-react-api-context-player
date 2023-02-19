import React, { useEffect, useState } from "react";
import axios from "axios";
import './SpotifyGetPlayList.css'


const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const SpotifyGetPlayList = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

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
        console.log(response.data.items[1].name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button className="get-playlist-button" onClick={handleGetPlaylists}>Get Playlists</button>

      
      {data?.items ?( <div>{data.items.map((item) => 
     
      
  (  <div key={item.id} className="name-div">    <p>{item.name}{console.log(item.name)}</p>
    
    </div>))} </div> ): null}

    {/* {data?.items ?          data.items.forEach(d =><p>{d.name}{console.log(d.name)}</p>)

 : null} */}




    </div>
  );
};

export default SpotifyGetPlayList;