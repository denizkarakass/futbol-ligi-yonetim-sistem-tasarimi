class Player {
  constructor(id, name, position) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.goals = 0;
  }

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

  addPlayer(player) {
    this.players.push(player);
  }

  updateStats(goalsScored, goalsConceded) {
    this.goalDifference += goalsScored - goalsConceded;
    if (goalsScored > goalsConceded) {
      this.points += 3; // Galibiyet
    } else if (goalsScored === goalsConceded) {
      this.points += 1; // Beraberlik
    }
  }
}

// Max-Heap Sınıfı
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Ekleme işlemi
  insert(team) {
    this.heap.push(team);
    this._heapifyUp();
  }

  // Yığındaki en büyük öğeyi almak
  extractMax() {
    if (this.heap.length === 0) return null;
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._heapifyDown();
    }
    return max;
  }

  // Yığın yapısını koruyarak yukarı doğru yerleştirme
  _heapifyUp() {
    let index = this.heap.length - 1;
    const team = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (this._compare(team, parent) <= 0) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = team;
      index = parentIndex;
    }
  }

  // Yığın yapısını koruyarak aşağı doğru yerleştirme
  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const team = this.heap[0];
    while (index * 2 + 1 < length) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let largest = index;
      if (this._compare(this.heap[leftChildIndex], this.heap[largest]) > 0) {
        largest = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this._compare(this.heap[rightChildIndex], this.heap[largest]) > 0
      ) {
        largest = rightChildIndex;
      }
      if (largest === index) break;
      this.heap[index] = this.heap[largest];
      this.heap[largest] = team;
      index = largest;
    }
  }

  // İki takımı karşılaştırarak sıralama için kullanılır
  _compare(team1, team2) {
    if (team1.points !== team2.points) {
      return team1.points - team2.points;
    }
    return team1.goalDifference - team2.goalDifference;
  }

  // Yığındaki tüm takımları al
  getAllTeams() {
    return [...this.heap];
  }
}

class League {
  constructor() {
    this.teams = new Map(); // Takımların ID'si ile saklanır
    this.players = new Map(); // Oyuncuların ID'si ile saklanır
    this.rankings = new MaxHeap(); // Lig sıralamalarını max-heap ile yönetir
  }

  // Takım ekle
  addTeam(team) {
    this.teams.set(team.id, team);
    this.rankings.insert(team); // Yeni takımı heap'e ekle
  }

  // Oyuncu ekle
  addPlayer(player) {
    this.players.set(player.id, player);
  }

  // Takımı ID ile getir
  getTeam(id) {
    return this.teams.get(id);
  }

  // Oyuncuyu ID ile getir
  getPlayer(id) {
    return this.players.get(id);
  }

  // Lig sıralamalarını göster
  displayRankings() {
    const rankedTeams = this.rankings.getAllTeams();
    rankedTeams.forEach((team, index) => {
      console.log(
        `${index + 1}. ${team.name} - ${team.points} points, Goal Difference: ${
          team.goalDifference
        }`
      );
    });
  }
}

module.exports = League;
