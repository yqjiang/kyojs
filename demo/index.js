// 获取画布

var canvas = document.getElementById('canvas');
canvas.width=800;
canvas.height=600;
var context = canvas.getContext('2d');

// 素材加载
// TODO: 移动到Loader
var mainscreen = new Image();
mainscreen.src="./img/background.jpg";
//BGM音乐
var audio = new Audio();
audio.src="./audio/bgm.mp3";
audio.autoplay = true;
mainscreen.addEventListener('load',function() {
context.clearRect(0,0,600,800);
context.drawImage(mainscreen,0,0,800,600);
context.fillStyle='#000000';
context.font="20px Arial";
context.fillText("这回一定要把这个游戏坑填完", 20, 250);
context.font="30px Arial";
context.fillText("Start", 500, 200);
context.fillText("Load", 500, 260);
context.fillText("Setting", 500, 320);
});

// 主界面
// TODO:移动到功能界面模块

context.fillStyle='#000000';
context.fillText("Loading",10,10);

var context = canvas.getContext('2d');
var map = [
  [0,0,0,0,0],
  [0,1,1,1,0],
  [0,1,1,1,0],
  [0,1,1,1,0],
  [0,0,0,0,0]
];
var map1 = new Image();
var map2 = new Image();
var man = new Image();
map1.src = './img/ground1.png';
map2.src = './img/ground2.png';
man.src = './img/person.png';

var mapsource = [map1, map2];

var many = 225;
var manx = 100;
var mantop = 0;
var manleft = 0;
var leftStatus = 0;
document.addEventListener('click',function(e){
  dd ();
  audio.pause();
});

function dd () {
requestAnimationFrame(render);
document.addEventListener('keydown',function(e){
  switch(e.which) {
    case 37:
      manx -= 5;
      many -= 10;
      mantop = 113.5 * 3;
      leftStatus = (leftStatus + 1) % 4;
      manleft = leftStatus * 85;
      break;
    case 38:
      manx -= 5;
      many += 10;
      mantop = 113.5 * 2;
      leftStatus = (leftStatus + 1) % 4;
      manleft = leftStatus * 85;
      break;
    case 39:
      manx += 5;
      many += 10;
      mantop = 0;
      leftStatus = (leftStatus + 1) % 4;
      manleft = leftStatus * 85;
      break;
    case 40:
      manx += 5;
      many -= 10;
      mantop = 113.5;
      leftStatus = (leftStatus + 1) % 4;
      manleft = leftStatus * 85;
      break;
  }
})
}


function render() {
  context.clearRect(0, 0, 800, 600);
  renderMap();
  renderMan();
  requestAnimationFrame(render);
}
function renderMan() {
  context.drawImage(man,manleft,mantop,85,113.5,many,manx,85,113.5);
}
function renderMap() {
  map.forEach(function(val, row) {
    val.forEach(function(value, col){
      var x = row * 100 + (col % 2) * 50;
      var y = col * 25 + 100;
      context.drawImage(mapsource[value],2,2,96,46,x,y,100,50);
    });
  });
}
