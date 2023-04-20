/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(Math.round(Math.PI * (radius ** 2) * 100) / 100, Math.round(Math.PI * 2 * radius * 100) / 100);
    this.radius = radius;
  }

  describe() {
    return super.describe() + `, radius: ${this.radius}`;
  }
}

const circ7 = new Circle(7);
console.log(circ7.describe());
