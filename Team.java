import java.util.ArrayList;
import java.util.List;

public class Team {
    private int id;
    private String name;
    private int points;
    private int goalDifference;
    private List<Player> players;

    public Team(int id, String name) {
        this.id = id;
        this.name = name;
        this.points = 0;
        this.goalDifference = 0;
        this.players = new ArrayList<>();
    }

    public void addPlayer(Player player) {
        players.add(player);
    }

    public void updateStats(int goalsScored, int goalsConceded) {
        this.goalDifference += (goalsScored - goalsConceded);
        if (goalsScored > goalsConceded) {
            this.points += 3; // Victory
        } else if (goalsScored == goalsConceded) {
            this.points += 1; // Draw
        }
    }

    public int getPoints() {
        return points;
    }

    public int getGoalDifference() {
        return goalDifference;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }
}
