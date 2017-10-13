function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


for (var i = 0; i < 81; i++) {
  var tile = document.createElement('div');
  var body = document.getElementsByTagName('body')[0];

  tile.style.width = '11.1%';
  tile.display = 'float';
  tile.style.float = 'left';
  tile.style.paddingBottom = '11.1%';

  if (i % 2 === 0) {
    tile.style.background = getRandomColor();
  } else {
    tile.style.background = getRandomColor();
  }

  body.appendChild(tile);
}
