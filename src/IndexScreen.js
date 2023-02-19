import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomPlayer from "./components/BottomPlayer";
import Sidebar from "./components/Sidebar";
import MainLayer from "./components/MainLayer";
import RightSidebar from "./components/RightSidebar";




export default function IndexScreen() {


  return  (
      
        <Router >
    
    <Sidebar />
    <RightSidebar />
    
    <MainLayer />
    <BottomPlayer />
    
    <Routes>
      {/* <Route exact path="/" element={<MainLayer />
     } /> */}
      {/* <Route path="/player" element={<Player />} /> */}
    </Routes>
  </Router>

  );
}
