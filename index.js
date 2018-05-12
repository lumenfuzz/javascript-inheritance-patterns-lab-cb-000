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
  this.prototype.move = (x,y) => {

  }
}
