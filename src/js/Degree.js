class Degree {
  name;
  status;
  modules;

  constructor(name) {
    this.name = name;
    this.status = "U";
    this.modules = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }

  getModules() {
    return this.modules;
  }

  addModule(module) {
    this.getModules().push(module);
  }

  calcScore() {
    let total = 0;
    let modules = this.getModules();
    if (modules.length != 0) {
      modules.forEach((module) => {
        total += module.calcScore();
      });
      total = total / modules.length;
    }

    if (total >= 70) {
      this.setStatus("1st");
    } else if (total >= 60) {
      this.setStatus("2:1");
    } else if (total >= 50) {
      this.setStatus("2:2");
    } else if (total >= 40) {
      this.setStatus("3rd");
    } else {
      this.setStatus("U");
    }

    return total;
  }
}

export default Degree;
