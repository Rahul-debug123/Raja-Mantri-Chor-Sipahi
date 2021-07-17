# Raja-Mantri-Chor-Sipahi
How to run this game:
1) Clone this repo: `git clone URL`
2) Install and update the dependencies `npm install` and `npm update`
3) Run index.js file as `node index.js` or `nodemon index.js`


## How to play the game:

1) This is the same game which we were playing in the school days with four cheats of papers.
2) This is multiplayer online games in which exacly four players can play this game.
3) First you have to connect with `http://localhost:3000/` (or with your desire domain or ports) by 4 different users (localy you have to open in 4 tabs)
4) As 4 players will join, it will be show the alert message "Round has started".
5) As similar with actual game, each player will be assined with four different roles i.e Raja, Mantri, Chor , Sipahi
6) The palyer which is assigned as 'Sipahi' will get two option to choose the user which is 'Chor', the two option is corresponds to 'Mantri' and 'Chor'.
7) If 'Sipahi' would have correct guess then, corresponding players will get the points as:
      |Player with role|Score|
      |Raja            |1000 |
      |Mantri          |800  |
      |Sipahi          |500  |
      |Chor            |0    |
8) If 'Sipahi' have inccorect guess then, the points will be provided as :
      |Player with role|Score|
      |Raja            |1000 |
      |Mantri          |800  |
      |Sipahi          |0    |
      |Chor            |500  |
9) As the guess work finish (mean user with 'Sipahi' role has clicked the radio button), then next round will automatically start.
10) In between, if any player disconnect him/her self, then game will be terminated and it will demand more player to connect (Because exacly 4 player is required)

