import java.util.HashMap;
import java.util.Map;

public class League {
    private Map<Integer, Team> teams;
    private Map<Integer, Player> players;

    public League() {
        teams = new HashMap<>();
        players = new HashMap<>();
    }

    public void addTeam(Team team) {
        teams.put(team.getId(), team);
    }

    public Team getTeam(int id) {
        return teams.get(id);
    }

    public void addPlayer(Player player) {
        players.put(player.getId(), player);
    }

    public Player getPlayer(int id) {
        return players.get(id);
    }
}
