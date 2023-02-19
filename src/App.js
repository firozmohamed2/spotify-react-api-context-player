import {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';
import Login from "./Login2";
import { AudioPlayerProvider } from './AudioPlayerContext';







function App() {

    return (

        <AudioPlayerProvider>
        <div className="App">
            <header className="App-header">
                
                 <Login />
            </header>
        </div>
        </AudioPlayerProvider>
    );
}

export default App;