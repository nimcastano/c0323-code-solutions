/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width ** 2, width * 4);
    this.width = width;
  }

  describe() {
    return super.describe() + `, width: ${this.width}`;
  }
}

const sqr7 = new Square(7);
console.log(sqr7.describe());
