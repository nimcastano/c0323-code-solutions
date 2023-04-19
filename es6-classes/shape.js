/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `area: ${this.area}, perimeter: ${this.perimeter}`;
  }

}

const square = new Shape(25, 20);
console.log(square.describe());
