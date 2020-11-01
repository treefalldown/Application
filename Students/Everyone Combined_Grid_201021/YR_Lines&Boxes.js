class OuterBox {
  constructor(x, y, speed, angle) {
    this.x = x;
    this.y = y;
    this.size = [500, 50, 5];
    this.fsw = [10, 15, 2.5];
    this.speed = speed;
    this.angle = 0;
  }
  draftBox() {
    fill(this.fsw[0])
    stroke(this.fsw[1])
    strokeWeight(this.fsw[2])

    push();
    if (this.x > 200 || this.x < 0) {
      this.speed = this.speed * -1
    }
    this.x = this.x + this.speed
    translate(this.x, this.y, 50);
    pop()
    rect(this.x, this.y, this.size[0], this.size[1], this.size[2])
  }
//   rotateBox() {
//     push()
//       rectMode(CENTER);
//       angleMode(DEGREES)
//       angle = angle + 1;
//       translate(50, 50);
//       rotate(angle);
//       rect(0, 0, 180, 180);
//     }
//     pop()
//   }
}

class Lines {
  constructor(x1, y1, x2, y2, color, weight, speedX, speedY) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
    this.weight = weight;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  draftLine() {
    stroke(this.color)
    strokeWeight(this.weight)
    line(this.x1, this.y1, this.x2, this.y2)
  }

  moveLineH() {
    if (this.x1 > width || this.x1 < 0) {
      this.speedX = this.speedX * -1;
    }
    this.x1 = this.x1 + this.speedX;

    if (this.x2 > width || this.x < 0) {
      this.speedX = this.speedX * -1;
    }
    this.x2 = this.x2 + this.speedX;
  }

  moveLineV() {
    if (this.y1 > height || this.y1 < 0) {
      this.speedY = this.speedY * -1;
    }
    this.y1 = this.y1 + this.speedY;

    if (this.y2 > height || this.y2 < 0) {
      this.speedY = this.speedY * -1;
    }
    this.y2 = this.y2 + this.speedY;
  }
}