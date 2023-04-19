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

const circ6 = new Circle(6);
console.log(circ6.describe());
