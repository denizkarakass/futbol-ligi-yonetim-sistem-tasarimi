class Match {
  constructor(team1, team2) {
    this.team1 = team1;
    this.team2 = team2;
    this.team1Goals = Math.floor(Math.random() * 5); // Rastgele gol sayısı
    this.team2Goals = Math.floor(Math.random() * 5);
  }

  simulate() {
    this.team1.updateStats(this.team1Goals, this.team2Goals);
    this.team2.updateStats(this.team2Goals, this.team1Goals);
  }
}

class MatchQueue {
  constructor() {
    this.queue = [];
  }

  // Maçı sıraya ekle
  addMatch(match) {
    this.queue.push(match);
  }

  // Sıradaki maçı al
  getNextMatch() {
    return this.queue.shift(); // Kuyruğun başından çıkar
  }
}

class MatchHistory {
  constructor() {
    this.history = [];
  }

  // Maçı geçmişe ekle
  addMatch(match) {
    this.history.push(match);
  }

  // Son maçı getir
  getLastMatch() {
    return this.history.length > 0
      ? this.history[this.history.length - 1]
      : null;
  }
}

module.exports = Match;
