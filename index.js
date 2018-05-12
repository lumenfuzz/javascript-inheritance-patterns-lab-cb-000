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
  Shape.prototype.addToPlane = (x,y) => {
    this.position = new Point(x,y)
  }
  Shape.prototype.move = (x,y) => {
    this.position.x = x
    this.position.y = y
  }
}
Shape.prototype = Object.create(Object.prototype)



function Circle() {
  Circle.prototype = Object.create(Shape.prototype)
}
