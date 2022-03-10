/* eslint-disable react/jsx-filename-extension */
import React, { Component, useState } from 'react';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function MainContainer() {

  const [favsPlayer, setFavsPlayer] = useState([]);
  const [favsTeam, setFavsTeam] = useState([]);
 console.log("main container players", favsPlayer)
  return (
    <div id = "main-container">
      <Header />

      <Sidebar
        setFavsPlayer={setFavsPlayer}
        setFavsTeam={setFavsTeam}
      />

      <Dashboard
        favsPlayer={favsPlayer}
        favsTeam={favsTeam}
      />
    </div>
  );
}

export default MainContainer;
