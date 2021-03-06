var platform, p1, p2, p3, bg_music;
var score=0, scoreText;

var GameStart = function(game) {};

GameStart.prototype = {

  preload: function () {
    game.load.image('placeholder1', 'assets/images/placholder.png');
    game.load.image('placeholder2', 'assets/images/placholder.png');
    game.load.image('placeholder3', 'assets/images/placholder.png');
    game.load.image('bg', 'assets/images/bg.png');
    game.load.image('ground', 'assets/images/ground.png');
    game.load.audio('bgm', 'assets/bgm/gamemusic.ogg');
  },


  create: function () {
      //0. Add event listeners
      game.input.mouse.capture = true;
      //1. Start the physics system
      game.physics.startSystem(Phaser.Physics.ARCADE);
      //2. add the background
      game.add.sprite(0, 0, 'bg');
      //3. create the group for physics
      platform = game.add.group();
      platform.enableBody = true;
      //4. create the platform which includes the ground
      var ground = platform.create(0, game.world.height - 100, 'ground');
      //5. fix the ground
      ground.body.immovable = true;
      score_text = game.add.text(16, 16, 'SCORE: 0', {font:"32px Ariel", fill:"#000"});
      
      bg_music = game.add.audio('bgm');
      bg_music.loop = true;
      bg_music.play();
      p1 = game.add.sprite(game.world.centerX / 2, game.world.centerY, 'placeholder1');
      p1.inputEnabled = true;
      p1.alpha = 0.5;
      p1.anchor.set(0.5);
      game.add.tween(p1).to({
          x: 100
      }, 2400, Phaser.Easing.Quadratic.InOut, true, 1200, 100, true);
      p1.events.onInputDown.add(onDown, this);
      p1.events.onInputUp.add(onUp, this);
      var text = game.add.text(-20,-40,"1", {font: "80px Ariel", fill: "#ffffff"});
      p1.addChild(text);
      p2 = game.add.sprite(game.world.centerX, game.world.centerY, 'placeholder2');
      p2.inputEnabled = true;
      p2.alpha = 0.5;
      p2.anchor.set(0.5);
      game.add.tween(p2).to({
          x: game.world.centerX - 100
      }, 2400, Phaser.Easing.Quadratic.InOut, true, 1200, 100, true);
      p2.events.onInputDown.add(onDown, this);
      p2.events.onInputUp.add(onUp, this);
      p3 = game.add.sprite(game.world.centerX + game.world.centerX / 2, game.world.centerY, 'placeholder3');
      p3.inputEnabled = true;
      p3.alpha = 0.5;
      p3.anchor.set(0.5);
      game.add.tween(p3).to({
          x: game.world.centerX + 100
      }, 2400, Phaser.Easing.Quadratic.InOut, true, 1200, 100, true);
      p3.events.onInputDown.add(onDown, this);
      p3.events.onInputUp.add(onUp, this);
  },



update: function() {
    if (p1.input.pointerOver()) {
        p1.alpha = 1;
    } else {
        p1.scale.setTo(1);
        p1.alpha = 0.5;
    }
    if (p2.input.pointerOver()) {
        p2.alpha = 1;
    } else {
        p2.scale.setTo(1);
        p2.alpha = 0.5;
    }
    if (p3.input.pointerOver()) {
        p3.alpha = 1;
    } else {
        p3.scale.setTo(1);
        p3.alpha = 0.5;
    }
}
};

function onDown(whichObject, value) {
  whichObject.scale.setTo(1.25);
}

function onUp(whichObject, value) {
  whichObject.scale.setTo(1);
  score += 10;
  scoreText.text =  'SCORE: ' + score;
}