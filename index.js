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
  this.prototype = Object.create(Object.prototype)
  Shape.prototype.addToPlane = (x,y) => {
    this.position = new Point(x,y)
  }
  Shape.prototype.move = (x,y) => {
    this.position.x = x
    this.position.y = y
  }
}

new Shape()

function Circle() {
  Circle.prototype = Object.create(Shape.prototype)
}
