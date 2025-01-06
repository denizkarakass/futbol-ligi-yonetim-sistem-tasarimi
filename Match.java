import java.util.Random;

public class Match {
    private Team team1;
    private Team team2;

    public Match(Team team1, Team team2) {
        this.team1 = team1;
        this.team2 = team2;
    }

    public void simulate() {
        Random rand = new Random();
        int team1Goals = rand.nextInt(5); // 0-4 random goals
        int team2Goals = rand.nextInt(5);

        System.out.println("Match Result: " + team1.getName() + " " + team1Goals + " - " + team2Goals + " " + team2.getName());

        team1.updateStats(team1Goals, team2Goals);
        team2.updateStats(team2Goals, team1Goals);
    }
}
