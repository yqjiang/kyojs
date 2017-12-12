

var mainLoader = new kyo.Loader();
mainLoader.on('imageLoaded', function() {
  main();
  button();
});



mainLoader.loadImages([{
  url: './img/main.jpg',
  name: 'mainBg'
}, {
  url: './img/button.png',
  name: 'button'
}]);



// 获取画布

var canvas = document.getElementById('canvas');
canvas.width = 1280;
canvas.height = 720;
var context = canvas.getContext('2d');
canvas.addEventListener('click', function(event) {
  console.log(event.offsetX);
  console.log(event.offsetY);
});


function main() {
  context.drawImage(mainLoader.sources.images.mainBg, 0, 0);
}

function button() {
  context.drawImage(mainLoader.sources.images.button, 100, 200);
  context.font = '24px serif';
  context.textBaseline = 'top';
  context.fillStyle = "#666";
  context.fillStyle = "#fff";
  context.strokeText('开始游戏', 100 + 60, 200 + 10);
  context.fillText('开始游戏', 100 + 60, 200 + 10);

  context.drawImage(mainLoader.sources.images.button, 100, 300);
  context.font = '24px serif';
  context.textBaseline = 'top';
  context.fillStyle = "#666";
  context.fillStyle = "#fff";
  context.strokeText('读取游戏', 100 + 60, 300 + 10);
  context.fillText('读取游戏', 100 + 60, 300 + 10);

  context.drawImage(mainLoader.sources.images.button, 100, 400);
  context.font = '24px serif';
  context.textBaseline = 'top';
  context.fillStyle = "#666";
  context.fillStyle = "#fff";
  context.strokeText('工作组', 100 + 60, 400 + 10);
  context.fillText('工作组', 100 + 60, 400 + 10);
}
