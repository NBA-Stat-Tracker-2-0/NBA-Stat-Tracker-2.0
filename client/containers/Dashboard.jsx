import React, { useEffect } from 'react';
import Team from '../components/Team';
import Player from '../components/Player';
import FavTeams from './FavTeams';
import FavPlayers from './FavPlayers';
import { Routes, Route } from 'react-router-dom';

function Dashboard({favsPlayer, favsTeam}) {
  console.log("dashboard", favsPlayer)


  return (
    <div id="dashboard">
      <Routes>
      {/* add some thing like a graph for the main page */}
      <Route path = "/favorite-players" element = {<FavPlayers favsPlayer = {favsPlayer}/>}/>
      <Route path = "/favorite-teams" element = {<FavTeams favsTeam = {favsTeam}/>}/>
      </Routes>
    </div>
  );
}

      
export default Dashboard;
