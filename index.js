function Point(x,y) {
  this.x = x;
  this.y = y;
  this.toString = () => {
    return `${this.x}, ${this.y}`
  }
}

function Side(length) {
  this.length = length
}

function Shape() {
}

Shape.prototype = Object.create(Shape.prototype)
Shape.prototype.addToPlane = (x,y) => {
  Shape.position = new Point(x,y)
}
Shape.prototype.move = (x,y) => {
  Shape.position.x = x
  Shape.position.y = y
}

function Circle() {
  Circle.prototype = Object.create(Shape.prototype)
}
