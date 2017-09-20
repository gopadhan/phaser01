// Global Variables

//bring Phaser to life by creating an instance of a Phaser.Game object and assigning it to a 
//global variable called 'game', The third parameter can be either Phaser.CANVAS, Phaser.WEBGL, 
//or Phaser.AUTO. This is the rendering context that you want to use
//4h parameter is id of the DOM element in which you would like to insert the canvas element that Phaser creates.
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game'),
  Main = function () {},
  gameOptions = {
    playSound: true,
    playMusic: true
  },
  musicPlayer;




Main.prototype = {
//Phaser automatically look preload function when it starts and load anything defined within it.
//we're going to load everything we need to show our cool splash screen, then we'll use the state system to switch to our awesome splash screen once it is ready.
  preload: function () {
    game.load.image('stars',    'assets/images/stars-bg.jpg');
    game.load.image('loading',  'assets/images/loading.png');
    game.load.image('brand',    'assets/images/logo.png');
    //game.load.script('polyfill',   'js/lib/polyfill.js');
    game.load.script('utils',   'js/lib/utils.js');
    game.load.script('splash',  'js/states/Splash.js');
  },

  create: function () {
    game.state.add('Splash', Splash);
    game.state.start('Splash');
  }

};

game.state.add('Main', Main);
game.state.start('Main');
