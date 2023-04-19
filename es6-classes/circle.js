/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    this.area = Math.PI * (radius ** 2);
    this.perimeter = Math.PI * 2 * radius;
  }

  describe() {
    return super.describe() + ' and radius: ' + this.radius;
  }
}

const circ6 = new Circle(6);
console.log(circ6.describe());
