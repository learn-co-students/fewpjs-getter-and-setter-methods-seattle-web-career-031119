class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return (2 * this.radius)
  }

  get area() {
    return (Math.PI * this.radius ** 2)
  }

  get circumference() {
    return (2 * Math.PI * this.radius)
  }

  set diameter(d) {
    this.radius =  d/2
  }

  set area(a) {
    this.radius = Math.sqrt(a / (Math.PI))
  }

  set circumference(c) {
    this.radius = c / (2 * Math.PI)
  }
}
