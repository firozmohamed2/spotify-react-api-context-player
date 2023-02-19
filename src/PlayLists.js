import { Container, Row, Col } from 'react-bootstrap';
import './PlayLists.css'

function App() {
  return (
    <div>
        <div className='left'></div>
        <div className='middle'></div>
        <div className='end'></div>

        <div className='bottom bottom-container' >
          

<div className='bottom-layer'>
          <div className='song-details-area'>
          <img className='round-img' src='https://picsum.photos/seed/picsum/200/300'></img>
            <div className='song-info '>
                <p className=''><span className='artist-name'>Akon<br></br></span> <span className='album-name'>The Beatles</span></p>
            </div>

          </div>
          <div className='controls-area'>
          <div class="music-player">
  <div class="play-pause-btn"></div>
  <div class="progress-bar">
    <div class="progress"></div>
  </div>
</div>
          </div>
          <div className='volume-area'></div>

          </div>

                    





        

        </div>
        
    </div>
  );
}

export default App;
