import React, { useState, useEffect } from 'react';

function Player({ playerId }) {
  const [playerName, setPlayerName] = useState('');
  const [playerHeight, setPlayerHeight] = useState('');
  const [playerBirthDate, setPlayerBirthDate] = useState('');
  const [playerCountry, setPlayerCountry] = useState('');
  const [playerWeight, setPlayerWeight] = useState('');
  const [playerCollege, setPlayerCollege] = useState('');
  const [playerJersey, setPlayerJersey] = useState('');
  const [playerPos, setPlayerPos] = useState('');

  // takes in data from basketball API to populate page with player's stats
  console.log('current player id:');
  console.log(playerId);

  const populatePlayerVitals = (data) => {
    const {
      firstname,
      lastname,
      birth,
      nba,
      height,
      weight,
      college,
      leagues,
    } = data[0];

    const name = firstname.concat(' ', lastname);
    const fullHeight = String(height.feets).concat('.', String(height.inches));
    const vitalArr = [
      name,
      fullHeight,
      birth.date,
      birth.country,
      nba.start,
      weight.pounds,
      leagues.standard.jersey,
      leagues.standard.pos,
    ];
    setPlayerName(name);
    setPlayerHeight(fullHeight);
    setPlayerBirthDate(birth.date);
    setPlayerCountry(birth.country);
    setPlayerWeight(weight.pounds);
    setPlayerBirthDate(college);
    setPlayerJersey(leagues.standard.jersey);
    setPlayerPos(leagues.standard.pos);
  };

  const getRandomKey = () => {
    const keys = process.env.keys.split(' ');
    return keys[Math.floor(Math.random() * keys.length)];
  };

  fetch(`https://api-nba-v1.p.rapidapi.com/players?id=${playerId}`, {
    headers: {
      'x-rapidapi-host': process.env.host,
      'x-rapidapi-key': getRandomKey(),
    },
  })
    .then((res) => res.json())
    .then((data) => populatePlayerVitals(data.response))
    .catch((err) => console.log('err at fetch in player', err));

  return (
    <div id="player-stats">
      <p>{playerName}</p>
      <p>{playerHeight}</p>
      <p>{playerBirthDate}</p>
      <p>{playerCountry}</p>
      <p>{playerWeight}</p>
      <p>{playerCollege}</p>
      <p>{playerJersey}</p>
      <p>{playerPos}</p>
    </div>
  );
}

export default Player;
