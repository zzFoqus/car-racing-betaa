var canvas, backgroundImage;
var car1, car2 , car3,car4,cars

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-40,displayHeight-40);
  database = firebase.database();
  game = new Game();
   game.start();
 game.getState();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
