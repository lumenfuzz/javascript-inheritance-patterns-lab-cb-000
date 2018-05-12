function Point(x,y) {
  this.x = x;
  this.y = y;
  this.prototype = Object.create(Object.prototype)
  this.toString = () => {
    return `${this.x}, ${this.y}`
  }
}

var pointessa = new Point(2,3)
