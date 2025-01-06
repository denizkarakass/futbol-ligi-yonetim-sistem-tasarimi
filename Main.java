public class Main {
    public static void main(String[] args) {
        // Yeni bir lig oluşturuluyor
        League league = new League();

        // Takım ve oyuncular ekleniyor
        Team team1 = new Team(1, "Team A");
        Team team2 = new Team(2, "Team B");
        league.addTeam(team1);
        league.addTeam(team2);

        Player player1 = new Player(1, "Player 1", "Forward");
        team1.addPlayer(player1);

        Player player2 = new Player(2, "Player 2", "Midfielder");
        team2.addPlayer(player2);

        // Maç simülasyonu
        Match match = new Match(team1, team2);
        match.simulate();

        // Lig sıralaması ekleniyor
        LeagueRankings rankings = new LeagueRankings();
        rankings.addTeam(team1);
        rankings.addTeam(team2);

        // Lig sıralaması görüntüleniyor
        rankings.displayRankings();
    }
}
