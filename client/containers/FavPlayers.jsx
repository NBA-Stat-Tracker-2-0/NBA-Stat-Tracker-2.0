import React, { PropTypes } from 'react';
import Player from '../components/Player';

function FavPlayers({favsPlayer}) {

  const players = [];
//push each favorite player into players
  for (let i = 0; i < favsPlayer.length; i++){
    players.push(
      <Player
        playerId={favsPlayer[i].player_id}
      />,
    );
  }

  return(
    <div>
        <h1>Favorite Players</h1>
        {players}
    </div>
  );
}

export default FavPlayers;