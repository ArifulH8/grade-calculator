class Assignment {
  name;
  grade;
  weight;

  constructor(name, grade, weight) {
    this.name = name;
    this.grade = grade;
    this.weight = weight;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getGrade() {
    return this.grade;
  }

  setGrade(grade) {
    this.grade = grade;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  calcScore() {
    return (this.getGrade() * this.getWeight());
  }
}

export default Assignment;
