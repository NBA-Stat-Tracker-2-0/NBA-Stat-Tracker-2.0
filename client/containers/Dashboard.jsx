import React, { useEffect } from 'react';
import Team from '../components/Team';
import Player from '../components/Player';
import FavTeams from './FavTeams';
import FavPlayers from './FavPlayers';
import { Routes, Route } from 'react-router-dom';

function Dashboard({ favsPlayer, favsTeam, setFavsPlayer, setFavsTeam }) {
  console.log("favsPlayer", favsPlayer);
  console.log("favsTeam", favsTeam);
  const playerComponents = favsPlayer.map((e) => (
    <Player
      favsPlayer={favsPlayer}
      setFavsPlayer={setFavsPlayer}
      playerId={e.player_id}
    />
  ));
  const teamComponents = favsTeam.map((teamId) => (
    <Team favsTeam={favsTeam} setFavsTeam={setFavsTeam} teamId={teamId} />
  ));

  return (
    <div id="dashboard">
      <Routes>
      <Route path = "/favorite-players" element = {<FavPlayers/>}/>
      <Route path = "/favorite-teams" element = {<FavTeams />}/>
      </Routes>
    </div>
  );
}
{/* <div id="teams">
        <h2>Teams</h2>
        {teamComponents}
      </div>
      <div id="players">
        <h2>Players</h2>
        {playerComponents}
      </div> */}
      
export default Dashboard;
