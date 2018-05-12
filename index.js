function Point(x,y) {
  this.x = x;
  this.y = y;
  this.prototype = Object.create(Object.prototype)
  this.prototype.toString = `${this.x}, ${this.y}`
}

var pointessa = new Point(2,3)
