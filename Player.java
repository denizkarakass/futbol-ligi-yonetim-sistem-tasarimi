public class Player {
    private int id;
    private String name;
    private String position;
    private int goals;

    public Player(int id, String name, String position) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.goals = 0;
    }

    public void addGoal() {
        goals++;
    }

    public int getGoals() {
        return goals;
    }

    public String getName() {
        return name;
    }
}
