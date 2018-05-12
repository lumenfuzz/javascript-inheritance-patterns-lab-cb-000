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
  this.prototype = Object.create(Shape.prototype)
  this.prototype.addToPlane = function(x,y) {
    this.position = new Point(x,y)
    return "exists"
  }
  this.addToPlane = this.prototype.addToPlane
  this.prototype.move = (x,y) => {
    this.position.x = x
    this.position.y = y
  }
  this.move = this.prototype.move
}

var shapessa = new Shape()
