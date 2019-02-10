"use strict";

function chessPlate() {
  for (var i = 0; i < 10; i++) {
    var main = document.createElement('div');
    main.classList.add('main');
    for (var j = 0; j < 10; j++) {
      var div = document.createElement('div');

      if ((i + j) % 2 === 0) {
        div.classList.add('yellow');
        if (i === 0 || i === 9) {
          div.textContent = String.fromCharCode(64 + j);
          div.classList.remove('yellow');
          div.classList.add('cell_border');
        }
        if (j === 0 || j === 9) {
          div.textContent = i;
          div.classList.remove('yellow');
          div.classList.add('cell_border');
        }
      } else {
        div.classList.add('black');
        if (i === 0 || i === 9) {
          div.textContent = String.fromCharCode(64 + j);
          div.classList.remove('black');
          div.classList.add('cell_border');
        }
        if (j === 0 || j === 9) {
          div.textContent = i;
          div.classList.remove('black');
          div.classList.add('cell_border');
        }
      }

      div.classList.add('cell');
      main.appendChild(div);
    }

    var mainDiv = document.getElementById('main-div');
    mainDiv.appendChild(main);
  }
}

chessPlate();
