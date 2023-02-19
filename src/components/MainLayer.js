import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { AudioPlayerContext } from './../AudioPlayerContext';
import './MainLayer.css'
import SpotifyGetPlayList from './SpotifyGetPlayList';


function MainLayer() {
    const { setAudioUrl } = useContext(AudioPlayerContext);
    const handleAudioUrlChange = (event) => {
        setAudioUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3');
      };
    

  return (
    <div className='middle'>
    middle
      {/* <Link to="/player">Go to Player</Link> */}
      {/* <button onClick={handleAudioUrlChange}>change audio to sound helix 17</button> */}
       <SpotifyGetPlayList />
    </div>
  )
}

export default MainLayer