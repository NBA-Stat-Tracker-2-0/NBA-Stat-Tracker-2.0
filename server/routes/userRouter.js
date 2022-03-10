const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();

//add a team to favotite teams
router.post('/addTeam/:teamId', userController.addTeam, (req, res) => {
  return res.status(200);
});

//get favorite teams
router.get('/favorite-teams', userController.getTeams, (req, res) => {
  return res.status(200).json(res.locals.teams);
});

//add a player to favotite players
router.post('/addPlayer/:playerId', userController.addPlayer, (req, res) => {
  return res.status(200);
});

//get favotite players
router.get('/favorite-players', userController.getPlayers, (req, res) => {
  return res.status(200).json(res.locals.players);
});


router.post('/removeTeam/:teamId', userController.removeTeam, userController.getTeams, (req, res) => {
  return res.status(200).json(res.locals.teams);
});

// router.post('/removePlayer/:playerId', userController.removePlayer, (req, res) => {
//   return res.status(200).json({ players: res.locals.players });
//  });

module.exports = router;
