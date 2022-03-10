/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import SearchBox from '../components/SearchBox';
import Favorites from '../components/Favorites';
import { Route, Link } from 'react-router-dom';

// fetch request to get all favorite players
function Sidebar({ setFavsPlayer, setFavsTeam }) {

  const getFavoritePlayers = () => {

    fetch('/user/favorite-players', {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((data) => {
        setFavsPlayer(data)
        console.log("get favorite player successful")
      })
      .catch((err) => console.log("err",err));
  };

// fetch request to get all favorite teams
  const getFavoriteTeams = () => {
   
    fetch('/user/favorite-teams', {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((data) => {
        setFavsTeam(data);
        console.log("get favorite team successful")
      })
      .catch((err) => console.log("err", err));
  };

  return (
    <div id="sidebar">

      <li><SearchBox setFavsPlayer={setFavsPlayer} setFavsTeam={setFavsTeam} /></li>
      <li><Link to = "/favorite-players" onClick = {getFavoritePlayers}>Favorite Players</Link></li>
      <li><Link to = "/favorite-teams" onClick = {getFavoriteTeams}>Favorite Teams</Link></li>
      {/* <li><Favorites favsPlayer={favsPlayer} favsTeam={favsTeam} /></li> */}
    </div>
  );
}

export default Sidebar;
