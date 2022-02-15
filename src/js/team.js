export default class Team {
  constructor() {
    this.team = [];
  }

  add(obj) {
    this.team.push(obj);
  }

  [Symbol.iterator]() {
    this.current = -1;
    return this;
  }

  next() {
    this.current += 1;
    if (this.current < this.team.length) {
      return { done: false, value: this.team[this.current] };
    }
    return { done: true };
  }
}
