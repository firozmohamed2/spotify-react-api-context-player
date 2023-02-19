import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { AudioPlayerContext } from './AudioPlayerContext';


function Library() {
    const { setAudioUrl } = useContext(AudioPlayerContext);
    const handleAudioUrlChange = (event) => {
        setAudioUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3');
      };
    

  return (
    <div>
      <Link to="/player">Go to Player</Link>
      <button onClick={handleAudioUrlChange}>change audio to sound helix 17</button>

    </div>
  )
}

export default Library