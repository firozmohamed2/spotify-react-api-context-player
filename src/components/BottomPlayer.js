import React from 'react'
import './../PlayLists.css'
import './Bottomplayer.css'

import { Link } from 'react-router-dom';

import  { useState, useRef, useEffect,useContext } from 'react';
import './../Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { AudioPlayerContext } from './../AudioPlayerContext';


function BottomPlayer() {
    
    const {audioUrl, setAudioUrl} = useContext(AudioPlayerContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
  
    const togglePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    };
  
    const handleInputChange = (event) => {
      setAudioUrl(event.target.value);
    };
  
  
  
    useEffect(() => {
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      });
  
      audioRef.current.addEventListener('ended', () => {
          setIsPlaying(false);
        });
    
  
      return () => {
        audioRef.current.removeEventListener('timeupdate', () => {
          setCurrentTime(audioRef.current.currentTime);
          setDuration(audioRef.current.duration);
        });
  
  
        audioRef.current.removeEventListener('ended', () => {
          setIsPlaying(false);
        });
  
  
  
      };
    }, []);
  
  
    useEffect(() => {
      //audioRef.current.pause();
      audioRef.current.play(function (e){
          console.log("error",e.message)
      } );
      setIsPlaying(true);
      //console.log("Audio");
  
    },[audioUrl]);
  
    const handleProgressClick = (event) => {
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const percentage = x / rect.width;
      audioRef.current.currentTime = audioRef.current.duration * percentage;
    };



    const handleProgressClickSound = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const percentage = x / rect.width;
      //  audioRef.current.currentTime = audioRef.current.duration * percentage;
      };
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };




    const outsideRef = useRef(null);
    const insideRef = useRef(null);
    const [percentage, setPercentage] = useState(0);
  
    const handleClick = (e) => {
      insideRef.current.style.width = `${e.offsetX}px`;
      const pct = Math.floor((e.offsetX / outsideRef.current.offsetWidth) * 100);
      setPercentage(pct);
    };


  return (
    <div className='bottom bottom-container'>
   <div className='bottom-layer'>
     <div className='song-details-area'>
       <img className='round-img' src='https://picsum.photos/seed/picsum/200/300'></img>
       <div className='song-info '>
         <p className=''>
           <span className='artist-name'>Akon <br></br>
           </span>
           <span className='album-name'>The Beatles</span>
         </p>
       </div>
     </div>
     <div className='controls-area'>
       <div className="container">
         <div className="player-container">
           <audio src={audioUrl} ref={audioRef} /> {/* <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button> */} <div className="controls">
             <button className="play-pause" onClick={togglePlayPause}> {isPlaying ?
               <FontAwesomeIcon icon={faPause} /> :
               <FontAwesomeIcon icon={faPlay} />}
             </button>
           </div> {/* <input style={{marginBottom:`10px`}} type="text" value={audioUrl} onChange={handleInputChange} /> */} <div className="progress" onClick={handleProgressClick}>
             <div className="progress-fill" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
           </div>
         </div>
         <div className="timestamps">
           <p className="current-time">{formatTime(currentTime)}</p>
           <p className="duration">{formatTime(duration)}</p>
         </div>
       </div>
     </div>



     <div className='volume-area'>
       Volume
     </div>
   </div>
 </div>
  )
}

export default BottomPlayer