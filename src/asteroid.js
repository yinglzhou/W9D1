class Asteroid extends MovingObject {
  static RADIUS = 25;
  static COLOR = "#FFC0CB";

  constructor(options) {
    this.pos = options.pos;
    this.radius = RADIUS;
    this.color = COLOR;
  }
}

import * as Util from "./util.js";
export default Asteroid;
