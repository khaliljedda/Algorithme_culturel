const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var individu = [];
var obstacle = [];

(function setup() {

  var i;
  var j;
 
  for (i = 0; i < 7; i++) {
    individu[i] = new Individu();
    individu[i].pickLocation()
  }

  for (i = 0; i < 10; i++) {

    obstacle[i] = new Obstacle();
    obstacle[i].pickLocation();
  }

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < 10; i++) {
      obstacle[i].draw();

    }
    for (i = 0; i < 7; i++) {
      individu[i].update();
      individu[i].draw();

    }


    for (j = 0; j < 7; j++) {
      for (i = 0; i < 10; i++) {
        if (individu[j].coll(obstacle[i])) {
          if (!Individu.croyance.includes(obstacle[i].y)) {
            Individu.croyance.push(obstacle[i].y);
          }
          individu[j].pickLocation();
        }
      }
    }
   
    document.querySelector('.score')
      .innerText = Individu.croyance;
   

  }, 270);
}());

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');

}));
