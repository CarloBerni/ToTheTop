var birdInterval;
var meteorInterval;
var planeInterval;
var stormInterval;
var ufoInterval;
var timer;

oxo.inputs.listenKey('space', function () {
  if (oxo.screens.getCurrentScreen !== 'game') {
    oxo.screens.loadScreen('game', game);
  }
});

function game() {
  setTimeout(function () {
    ufoInterval = setInterval(function () {
      addufo();
    }, 8000);
  }, 70000);
  setTimeout(function () {
    stormInterval = setInterval(function () {
      addstorm();
    }, 3500);
  }, 30000);
  setTimeout(function () {
    meteorInterval = setInterval(function () {
      addMeteor();
    }, 2000);
  }, 65000);
  birdInterval = setInterval(addbird, 5000);
  planeInterval = setInterval(addplane, 8000);

  var balloon;
  var size = 40;
  var xSquares = 1280 / 40;

  oxo.player.setScore(0);
  timer = setInterval(function () {
    oxo.player.addToScore(1);
  }, 900);

  var balloon = document.getElementById('balloon');
  oxo.inputs.listenKeys(['left', 'right'], function (key) {
    var position = oxo.animation.getPosition(balloon);
    console.log(position);
    if (key === 'left' && position.x > 0) {
      oxo.animation.move(balloon, 'left', 20);
    }
    if (key === 'right' && position.x < 1000000) {
      oxo.animation.move(balloon, 'right', 20);
    }
  });

  function addMeteor() {
    var meteor = oxo.elements.createElement({
      class: 'meteor',
      styles: {
        transform:
          'translate(' +
          oxo.utils.getRandomNumber(0, xSquares - 1) * size +
          'px, 0px)',
      },
    });
    setInterval(function () {
      oxo.animation.move(meteor, 'down', 2, true);
    }, 5);

    oxo.elements.onCollisionWithElement(balloon, meteor, function () {
      oxo.screens.loadScreen('end', end);
    });
  }


  function addbird() {
    var bird = oxo.elements.createElement({
      class: 'bird',
      styles: {
        transform:
          'translate(' +
          oxo.utils.getRandomNumber(0, xSquares - 1) * size +
          'px, 0px)',
      },
    });
    setInterval(function () {
      oxo.animation.move(bird, 'down', 1, true);
    }, 5);

    oxo.elements.onCollisionWithElement(balloon, bird, function () {
      oxo.screens.loadScreen('end', end);
    });
  }

  function addplane() {
    var plane = oxo.elements.createElement({
      class: 'plane',
      styles: {
        transform:
          'translate(' +
          oxo.utils.getRandomNumber(0, xSquares - 1) * size +
          'px, 0px)',
      },
    });
    setInterval(function () {
      oxo.animation.move(plane, 'down', 1, true);
    }, 2);

    oxo.elements.onCollisionWithElement(balloon, plane, function () {
      oxo.screens.loadScreen('end', end);
    });
  }

  function addstorm() {
    var storm = oxo.elements.createElement({
      class: 'storm',
      styles: {
        transform:
          'translate(' +
          oxo.utils.getRandomNumber(0, xSquares - 1) * size +
          'px, 0px)',
      },
    });
    setInterval(function () {
      oxo.animation.move(storm, 'down', 2, true);
    }, 8);

    oxo.elements.onCollisionWithElement(balloon, storm, function () {
      oxo.screens.loadScreen('end', end);
    });
  }

  function addufo() {
    var ufo = oxo.elements.createElement({
      class: 'ufo',
      styles: {
        transform:
          'translate(' +
          oxo.utils.getRandomNumber(0, xSquares - 1) * size +
          'px, 0px)',
      },
    });
    setInterval(function () {
      oxo.animation.move(ufo, 'down', 2, true);
    }, 3);

    oxo.elements.onCollisionWithElement(balloon, ufo, function () {
      oxo.screens.loadScreen('end', end);
    });
  }
}



function end() {
  console.log(end);
  clearInterval(ufoInterval);
  clearInterval(stormInterval);
  clearInterval(meteorInterval);
  clearInterval(birdInterval);
  clearInterval(planeInterval);
  clearInterval(timer);
}