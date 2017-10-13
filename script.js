for (var i = 0; i < 81; i++) {
  var tile = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];

  tile.style.width = '11.1%';
  tile.display = 'float';
  tile.style.float = 'left';
  tile.style.paddingBottom = '11.1%';

  if (i % 2 === 0) {
    tile.style.background = 'color';
  } else {
    tile.style.background = 'color';
  }

  body.appendChild(tile);
}
