//game constants and variables
const speed = 160;//this variable controls how fast the player moves

//use this for asset loading, notice how I load the image form the folder
function preload() {
  //notice that we need to provide the name of the image and its location 
  this.load.image('player', 'assets/snp.png');
}

//use this to setup the environment
function create() {
  //setting variable shortcuts for the key references
    this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
 
  //add a sprite object to the physics engine with the x, y, and image
  this.player = this.physics.add.sprite(200, 200, 'player');
  //make the sprite the right size with width and height
  this.player.setScale(0.50, 0.50);
  //set the ability of the sprite to leave the screen
  this.player.setCollideWorldBounds(true);
}

//this function get called every frame
  //move things then check
function update() {
  //up and down
  if (this.a.isDown ){
    this.player.setVelocityX(-speed);
  } 
  else if(this.d.isDown){
    this.player.setVelocityX(speed);
  } 
  else {
    this.player.setVelocityX(0);
  }
  //left and right
  if (this.w.isDown ){
    this.player.setVelocityY(-speed);
  } 
  else if(this.s.isDown){
    this.player.setVelocityY(speed);
  } 
  else {
    this.player.setVelocityY(0);
  }

}

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    backgroundColor: '#d9d9d9',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 1
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

//this is the actual line that starts everything off
const game = new Phaser.Game(config);
