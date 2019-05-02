class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return 2 * Math.PI * this.radius
  }

  get area() {
    return (this.radius ** 2) * Math.PI
  }

  set diameter(diam) {
    this.radius = diam / 2
  }

  set circumference(circum) {
    this.radius = circum / (Math.PI * 2)
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.PI)
  }
}
