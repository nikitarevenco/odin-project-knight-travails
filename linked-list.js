export class MoveSequence {
  constructor(coordinate = null, previousMove = null) {
    this.coordinate = coordinate;
    this.previousMove = previousMove;
  }

  size(obj = this, counter = 0) {
    const self = this;

    if (obj.previousMove === null) {
      counter++;
      return counter;
    } else {
      return self.size(obj.previousMove, ++counter);
    }
  }

  pop() {
    this.at(this.size() - 2).previousMove = null;
  }
  insertAt(coordinate, index) {
    this.at(index).previousMove = new Move(coordinate, this.at(index + 1));
  }
  removeAt(index) {
    this.at(index - 1).previousMove = this.at(index + 1);
  }
  toString() {
    let stringify = "";
    for (let i = 0; i < this.size(); i++) {
      if (i !== 0) {
        stringify = `( ${this.at(i).coordinate} ) --> ` + stringify;
      } else {
        stringify = `( ${this.at(i).coordinate} )` + stringify;
      }
    }
    return stringify;
  }
  at(index, counter = 0, obj = this) {
    const self = this;

    if (index !== counter) {
      return self.at(index, ++counter, obj.previousMove);
    }

    return obj;
  }
  find(coordinate) {
    if (!this.contains(coordinate)) return null;
    for (let i = 0; i < this.size(); i++) {
      if (this.at(i).coordinate === coordinate) {
        return i;
      }
    }
  }
  contains(coordinate, obj = this) {
    const self = this;
    if (obj.coordinate === coordinate) {
      return true;
    }
    if (obj.previousMove === null) {
      return false;
    } else {
      return self.contains(coordinate, obj.previousMove);
    }
  }
  prepend(coordinate) {
    const current = new MoveSequence(this.coordinate, this.previousMove);
    this.previousMove = current;
    this.coordinate = coordinate;
  }
  append(coordinate) {
    this.tail().previousMove = new Move(coordinate);
  }
  head() {
    return this;
  }
  tail(obj = this) {
    const self = this;
    if (obj.previousMove === null) {
      return obj;
    } else {
      return self.tail(obj.previousMove);
    }
  }
}

export class Move {
  constructor(coordinate = null, previousMove = null) {
    this.coordinate = coordinate;
    this.previousMove = previousMove;
  }
}
