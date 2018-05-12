function Point(x,y) {
  this.x = x;
  this.y = y;
  this.prototype = Object.create(Object.prototype)
}
