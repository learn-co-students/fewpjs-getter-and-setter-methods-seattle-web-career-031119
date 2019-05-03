class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    let pi = Math.PI
    let diameter = 2 * this.radius;
    return diameter;
  }

  get circumference() {
    let pi = Math.PI
    let circumference = 2 * pi * this.radius;
    return circumference;
  }

  get area() {
    let pi = Math.PI
    let area = pi * (this.radius * this.radius);
    return area;
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2
  }

  set circumference(newCircumference) {
    let pi = Math.PI
    this.radius = newCircumference / 2 / pi
  }

  set area(newArea) {
    let pi = Math.PI
    beforeRoot = newArea / pi
    this.radius = Math.sqrt(beforeRoot);
  }
}
