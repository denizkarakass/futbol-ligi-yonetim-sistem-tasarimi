class Player {
  constructor(id, name, position) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.goals = 0;
  }

  // Gol ekle
  addGoal() {
    this.goals++;
  }
}

class Team {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.points = 0;
    this.goalDifference = 0;
    this.players = [];
  }

  // Oyuncu ekle
  addPlayer(player) {
    this.players.push(player);
  }

  // Takımın istatistiklerini güncelle
  updateStats(goalsScored, goalsConceded) {
    this.goalDifference += goalsScored - goalsConceded;
    if (goalsScored > goalsConceded) {
      this.points += 3; // Galibiyet
    } else if (goalsScored === goalsConceded) {
      this.points += 1; // Beraberlik
    }
  }
}

module.exports = { Team, Player };
