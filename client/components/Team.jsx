import React, { useEffect } from 'react';

function Team({ teamId }) {
  console.log("team id", teamId)
  // generates random key
  const getRandomKey = () => {
    const keys = process.env.keys.split(' ');
    return keys[Math.floor(Math.random() * keys.length)];
  };

  // give each favorite team a logo
  const populateTeamVitals = (team) => {
    console.log("team obj", team)
    document.getElementById(teamId).src = team.logo;
  };

  // grab team info when component renders
  fetch(`https://api-nba-v1.p.rapidapi.com/teams?id=${teamId}`, {
    headers: {
      'x-rapidapi-host': process.env.host,
      'x-rapidapi-key': getRandomKey(),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      populateTeamVitals(data.response[0]);
    });

  return (
    <div>
      <img className="logo" alt="team logo" id={teamId} />
      <p>hiiiii</p>
    </div>
  );
}

export default Team;
