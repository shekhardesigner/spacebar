import "../node_modules/nes.css/css/nes.min.css"
import "../styles/styles.scss";

function Game () {
  var self = this,
    timer,
    meta = {
      score: 0,
      highestScore: 0,
      level: 1,
      levels: 5
    },
    elements = {
      person: document.querySelector(".person"),
      obstacles: document.querySelector(".obstacles"),
      score: document.getElementById("metaScore"),
      level: document.getElementById("metaLevel"),
      highestScore: document.getElementById("metaHighest")
    },
    constants = {
      jumpClass: "jumped",
      obstacleClass: "obstacle",
      obstacleVariation: ["obstacle-mini", "obstacle-medium", "obstacle-large"]
    };

  self.start = function() {
    jump();

    timer = setInterval(function() {
      moveObstacles();
      moveBackgrounds();
      detectCollision();
      updateScore();
    }, 100);
  };

  self.pause = function() {};
  self.resume = function() {};
  self.restart = function() {
    self.start();
  };
  self.stop = function() {
    // storeState(meta);
    clearTimeout(timer);
  };

  self.mute = function() {
    var isMute = localStorage.getItem("mute") ? true : false;
    localStorage.setItem("isMute", isMute);
  };

  self.changeAvatar = function() {
    var isMale = localStorage.getItem("gender") === "M" ? true : false;
    localStorage.setItem("isMale", isMale);
  };

  function jump() {
    document.addEventListener(
      "keyup",
      function(e) {
        e.preventDefault();
        if (e.keyCode === 32) {
          elements.person.classList.add(constants.jumpClass);
          var _timer = setTimeout(function() {
            elements.person.classList.remove(constants.jumpClass);
            clearTimeout(_timer);
          }, 400);
        }
      },
      true
    );
  }

  function moveObstacles() {}

  function moveBackgrounds() {}

  function detectCollision() {
    // var collide = false;
    // if(collide) {
    // 	self.playSound('collide');
    // 	self.stop();
    // }
  }

  function playSound() {}

  function updateScore() {
    meta.score++;
    elements.score.innerText = meta.score;
    if (meta.score % 100 == 0) {
      updateLevel();
      // self.stop();
    }
  }
  function updateLevel() {
    meta.level++;
    elements.level.innerText = meta.level;
  }

  function storeState(s, hs, l, mute) {
    var obj = {
      score: s,
      highScore: hs,
      level: l
    };

    for (keys in obj) {
      localStorage.setItem(keys, obj[keys]);
    }
  }

  self.init = function() {
    self.start();

    var _new = new Obstacles();
    _new.generate();
  };

  function Obstacles() {
    var obstacle = this,
      pos = 600,
      interval;

    obstacle.generate = function() {
      var random = function _randon() {
          var _num = Math.ceil(Math.random() * 10);
          if (_num <= 3) return _num;
          else return _randon();
        },
        _obs = document.createElement("span");

      _obs.classList.add(constants.obstacleClass);
      _obs.classList.add(constants.obstacleVariation[random() - 1]);

      elements.obstacles.appendChild(_obs);
      interval = setInterval(obstacle.move, 60);
    };

    obstacle.move = function(elm) {
      pos -= 10;
      document.querySelector(".obstacle").style.transform =
        "translateX(" + pos + "px)";
      if (pos <= 0) obstacle.destroy();
    };

    obstacle.destroy = function() {
      clearTimeout(interval);
      document.querySelector(".obstacle").remove();
      pos = 700;
      obstacle.generate();
    };
  }
};

var SpaceBarGame = new Game();
SpaceBarGame.init();
