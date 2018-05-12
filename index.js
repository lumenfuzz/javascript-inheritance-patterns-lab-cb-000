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
Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y)
}
Shape.prototype.move = function(x,y) {
  this.position.x = x
  this.position.y = y
}

function Circle() {
}
Circle.prototype = Object.create(Shape.prototype)

function Polygon() {

}
