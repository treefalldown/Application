class Circles {
  constructor(x, y, dia, color, lineColor, weight, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.dia = dia;
    this.color = color;
    this.lineColor = lineColor;
    this.weight = weight;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  draftCircle() {
    fill(this.color)
    stroke(this.lineColor)
    strokeWeight(this.weight)
    ellipse(this.x, this.y, this.dia)

    stroke(255);
    strokeWeight(0.5)
    line(this.x, 0, this.x, height)
    line(0, this.y, height, this.y)

    if (this.x > width || this.x < 0) {
      this.speedX = this.speedX * -1;
    }
    this.x = this.x + this.speedX;

    if (this.y > height || this.y < 0) {
      this.speedY = this.speedY * -1;
    }
    this.y = this.y + this.speedY;
    translate(this.X, this.Y, 50)
  }
}
