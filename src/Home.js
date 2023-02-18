import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";


import Library from "./library";
import Player, { AudioPlayer } from "./player";
import "./home.css";

export default function Home() {


  return  (
      
        <Router>
    <AudioPlayer />
    <Routes>
      <Route exact path="/" element={<Library />} />
      <Route path="/player" element={<Player />} />
    </Routes>
  </Router>

  );
}
