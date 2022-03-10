import React, { PropTypes } from 'react';
import Team from '../components/Team';

function FavTeams({favsTeam}) {

  const teams = [];
//push each favorite team into teams
  for (let i = 0; i < favsTeam.length; i++){
    console.log("hi");
    teams.push(
      <Team
        teamId={favsTeam[i].team_id}
      />,
    );
  }

  
  return(
    <div>
        <h1>Favorite Teams</h1>
        {teams}
    </div>
  );
}

export default FavTeams;