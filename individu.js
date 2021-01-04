class Individu {
    static croyance = [];
    constructor() {
      this.x = 0;
      this.y = 10;
      this.xSpeed = scale * 1;
      this.ySpeed = 0;
      this.total = 2;
     
    }
    pickLocation() {
      
      if (Individu.croyance.length==0  ) {
        this.y = (Math.floor(Math.random() *
            rows - 1) + 1) * scale;
          
      } else  {
        this.y = (Math.floor(Math.random() *
        rows - 1) + 1) * scale;
        while (Individu.croyance.find(el => el == this.y)){
          this.y = (Math.floor(Math.random() *
            rows - 1) + 1) * scale;
            console.log("dd")
        }
      } 
      console.log(this.y);
    }
    
    draw() {
      ctx.fillStyle = "#FFFFFF";
    
      ctx.fillRect(this.x, this.y, scale, scale);
    }
  
    update() {
      this.x += this.xSpeed;
      if (this.x > canvas.width) {
        this.pickLocation();
        this.x = 0;     
      }
    }
  
   
  
    coll(obstacle) {
      if (this.x === obstacle.x &&
        this.y === obstacle.y) {
        console.log(obstacle.y);
           return true;
      }
  
      return false;
    }
  
  
  }
  