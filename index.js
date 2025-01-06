// İlgili modülleri import ediyoruz
const League = require("./league");
const { Team, Player } = require("./playerTeam");
const Match = require("./match");
const LeagueRankings = require("./rank");

// Yeni bir League nesnesi oluşturuyoruz
const league = new League();

// Takım ve oyuncu ekleme
const team1 = new Team(1, "Team A");
const team2 = new Team(2, "Team B");
league.addTeam(team1);
league.addTeam(team2);

// Oyuncu ekleme
const player1 = new Player(1, "Player 1", "Forward");
team1.addPlayer(player1);

const player2 = new Player(2, "Player 2", "Midfielder");
team2.addPlayer(player2);

// Maç simülasyonu
const match = new Match(team1, team2);
match.simulate();

// Lig sıralamasını oluşturma
const rankings = new LeagueRankings();
rankings.addTeam(team1);
rankings.addTeam(team2);

// Lig sıralamasını görüntüle
rankings.displayRankings();
