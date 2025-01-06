class BST {
  constructor() {
    this.root = null;
  }

  insert(team) {
    this.root = this.insertRec(this.root, team);
  }

  insertRec(root, team) {
    if (root === null) {
      root = new Node(team);
      return root;
    }
    if (team.name < root.team.name) {
      root.left = this.insertRec(root.left, team);
    } else if (team.name > root.team.name) {
      root.right = this.insertRec(root.right, team);
    }
    return root;
  }

  search(name) {
    return this.searchRec(this.root, name);
  }

  searchRec(root, name) {
    if (root === null || root.team.name === name) {
      return root ? root.team : null;
    }
    if (name < root.team.name) {
      return this.searchRec(root.left, name);
    }
    return this.searchRec(root.right, name);
  }
}

class Node {
  constructor(team) {
    this.team = team;
    this.left = null;
    this.right = null;
  }
}
