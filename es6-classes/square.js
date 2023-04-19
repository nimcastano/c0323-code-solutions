/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super();
    this.width = width;
    this.area = width ** 2;
    this.perimeter = width * 4;
  }

  describe() {
    return super.describe() + ' and width: ' + this.width;
  }
}

const sqr7 = new Square(7);
console.log(sqr7.describe());
