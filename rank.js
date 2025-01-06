class LeagueRankings {
  constructor() {
    this.rankings = [];
  }

  // Takımı sıralamaya ekle
  addTeam(team) {
    this.rankings.push(team);
    this.rankings.sort((a, b) => {
      // Puanlara göre sıralama
      if (a.points !== b.points) return b.points - a.points;
      // Puanlar eşitse, gol farkına göre sıralama
      return b.goalDifference - a.goalDifference;
    });
  }

  // Sıralamayı göster
  displayRankings() {
    this.rankings.forEach((team, index) => {
      console.log(
        `${index + 1}. ${team.name} - ${team.points} points, Goal Difference: ${
          team.goalDifference
        }`
      );
    });
  }
}

module.exports = LeagueRankings;
