function ParticleSystem () {
  this.particles = [];

  this.addParticles = function (pos, numOfParticles) {
    for (var i = 0; i<numOfParticles; i++){
    var p = new Particle();
    var pos = createVector (pos.x + random(-50,50), pos.y + random(-5,5));
    p.setup(pos);

    //p.applyForce(force);
    //this.particle[i] = p;
    this.particles.push (p);
  }


}

this.dontTouch = function () {
  for (var i = 0; i < this.particles.length; i++) {
    var ip = this.particles[i];
    for (var j = this.particles.length - 1; j > i; j--) {
    //  console.log("me:" + i + "friend:" + j);
    var jp = this.particles[j];
    var distance = ip.pos.dist(jp.pos);
    if (distance < (ip.size + jp.size)) {
      var f1 = ip.pos.copy().sub(jp.pos).mult(0.01);
      var f2 = ip.pos.copy().sub(jp.pos).mult(-0.01);
      ip.applyForce(f1);
      jp.applyForce(f2);
      }
    }
  }
}

this.draw = function() {
  
  for (var i =0; i <this.particles.length ; i++) {

    if (this.particles[i].isDead) {
      this.particles.slice(i, 1);
    } else {
        this.particles[i].update();
        this.particles[i].draw();
      }
    }
      this.dontTouch();
  }
}
