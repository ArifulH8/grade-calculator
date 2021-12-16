class Module {
  name;
  id;
  credits;
  assignments;

  constructor(name, id, credits) {
    this.name = name;
    this.id = id;
    this.credits = credits;
    this.assignments = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getCredits() {
    return this.credits;
  }

  setCredits(credits) {
    this.credits = credits;
  }

  getAssignment() {
    return this.assignments;
  }

  addAssignment(assignment) {
    this.getAssignment().push(assignment);
  }

  calcScore() {
    let total = 0;
    let assignment = this.getAssignment();
    if (assignment.length != 0) {
      assignment.forEach((assignment) => {
        total += assignment.calcScore();
      });
    }
    return total;
  }
}

export default Module;
