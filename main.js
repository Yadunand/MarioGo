function preload() {
	
	setSprites();
	MarioAnimation();
}

function setup() {
	createCanvas(gameConfig.screenX,gameConfig.screenY);
	instializeInSetup(mario);
	
}

function draw() {
	game()
}






