
/***************************************************************************
	Project name: Rooms of My House
		by Ashley Lee
	Overview: This is Ashley Lee's rooms of my house p5.js that shows navigation structure using the keyboard between 9 rooms.
	________________________________________________________________________
	Note: 
	(1) this code translates Ashley's dream house that was made in XD
	(2) use left,right,down, and up keyboard button to navigate between rooms
	(3) each state is a different room which has a label of the room and the 
	navigation insturctions.
******************************************************************************/

// array of images + placing
var images = [];
var imagesX = 0;
var imagesY = -5;

// variable that is a draw function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// instrunctions array
var strings = [];
var instructionsY = 350; 
var instructionsX = 110;
var lineHeight = 24;

//Navigation instructions per room;
var stringsRoomInst = [];
var roomInstX = 300; 
var roomInstY = 300;

// room labels 
var labelsX = 530;
var labelsY = 70;

//load all images into an array
function preload() {
	images[0] = loadImage('AssetsHouse/opening.png');
	images[1] = loadImage('AssetsHouse/bedroom.png');
	images[2] = loadImage('AssetsHouse/bedroomBathroom.png');
	images[3] = loadImage('AssetsHouse/dining.png');
	images[4] = loadImage('AssetsHouse/dressing.png');
	images[5] = loadImage('AssetsHouse/hallway.png');
	images[6] = loadImage('AssetsHouse/kitchen.png');
	images[7] = loadImage('AssetsHouse/laundry.png');
	images[8] = loadImage('AssetsHouse/living.png');
	images[9] = loadImage('AssetsHouse/livingBathroom.png');

}

// Setup code 
function setup() {
  createCanvas(600, 600);

  //Setup for text
  textAlign(CENTER);
  textSize(11);
  textStyle(BOLD);

  //set to hallway for starup
  drawFunction = drawOpening;
 }


// Set background color to white and call state machine function
function draw() {
  background(255);

  //call state machine function
  drawFunction();
}

// load instructions array
function loadArray() {
	strings[0] = "Ashley's Dream Home"
	strings[1] = ""
	strings[2] = "Press arrow keyboard to navigate"
	strings[3] = "Look for the blue arrows"
	strings[4] = "Press the up keyboard to start"

}
// load room instructions array
function loadArrayRoomInstructions() {
	// hallway
	stringsRoomInst[0] = "Press left, right, or down"
	// kitchen
	stringsRoomInst[1] = "Press left, right, or down"
	// laundry
	stringsRoomInst[2] = "Press left"
	// dining 
	stringsRoomInst[3] = "Press left or up"
	// living
	stringsRoomInst[4] = "Press left, right, or up"
	// living bathroom
	stringsRoomInst[5] = "Press right"
	// bedroom
	stringsRoomInst[6] = "Press right or down"
	// dressing
	stringsRoomInst[7] = "Press up or down"
	// bedroom bathroom
	stringsRoomInst[8] = "Press left, right, or down"

}
// draw Opening
drawOpening = function() {
	image(images[0], 0, -5);

//load instructions array 
	loadArray();

//print instructions
	for ( let i = 0; i < strings.length; i++ ) {
		text( strings[i], instructionsX, instructionsY + (i * lineHeight) )
	}
}

// draw Hallway
drawHallway = function() {
	image(images[5], imagesX, imagesY);

	fill(52,200,250);
	stroke(4);
	textSize(25);
	text("Hallway", labelsX, labelsY);

	//room navigation instruction
	loadArrayRoomInstructions();
	text(stringsRoomInst[0], roomInstX, roomInstY - 50);
}

// draw Kitchen
drawKitchen = function() {
	image(images[6], imagesX, imagesY);
	text("Kitchen", labelsX, labelsY);

	//room navigation instruction
	loadArrayRoomInstructions();
	text(stringsRoomInst[1], roomInstX, roomInstY + 70);
}

// draw Bedroom
drawBedroom = function() {
	image(images[1], imagesX, imagesY);
	text("Bedroom", labelsX, labelsY);

	//room navigation instruction
	loadArrayRoomInstructions();
	text(stringsRoomInst[6], roomInstX, roomInstY);
}

// draw Bedroom Bathroom
drawBedroomBathroom = function() {
	image(images[2], imagesX, imagesY);
	text("Bedroom Bathroom", labelsX - 90, labelsY);

	//room navigation instruction
	loadArrayRoomInstructions();
	text(stringsRoomInst[8], roomInstX, roomInstY - 20);
}

// draw Dinging 
drawDining= function() {
	image(images[3], imagesX, imagesY);
	text("Dining", labelsX, labelsY);

	//room navigation instruction
	loadArrayRoomInstructions();
	text(stringsRoomInst[3], roomInstX, roomInstY + 150);
}

// draw Dressing
drawDressing = function() {
	image(images[4], imagesX, imagesY);
	text("Dressing", labelsX, labelsY);

	//room navigation instruction
	loadArrayRoomInstructions();
	text(stringsRoomInst[7], roomInstX, roomInstY);
}

// draw Laundry
drawLaundry = function() {
	image(images[7], imagesX, imagesY);
	text("Laundry", labelsX, labelsY);

	//room navigation instruction
	loadArrayRoomInstructions();
	text(stringsRoomInst[2], roomInstX, roomInstY);
}

// draw Living
drawLiving= function() {
	image(images[8], imagesX, imagesY);
	text("Living", labelsX , labelsY);

	//room navigation instruction
	loadArrayRoomInstructions();
	text(stringsRoomInst[4], roomInstX, roomInstY);
}

// draw Living Bathroom
drawLivingBathroom= function() {
	image(images[9], imagesX, imagesY);
	text("Living Bathroom", labelsX - 90, labelsY);

	//room navigation instruction
	loadArrayRoomInstructions();
	text(stringsRoomInst[5], roomInstX, roomInstY);
}

//Navigation functioncode 
function keyPressed(){

	// From Opening
	if (drawFunction === drawOpening) {
		//To go inside the house
		if (keyCode === UP_ARROW){
			drawFunction = drawHallway;
		}
	}

	// From Hallway
	else if (drawFunction === drawHallway) {
		// To Kitchen
		if (keyCode === RIGHT_ARROW){
			drawFunction = drawKitchen;
		}
		// To Living
		else if (keyCode === DOWN_ARROW){
			drawFunction = drawLiving;
		}
		// To Bedroom
		else if (keyCode === LEFT_ARROW){
			drawFunction = drawBedroom;
		}
	}

	// From Bedroom
	else if (drawFunction === drawBedroom) {
		// To Hallway
		if (keyCode === RIGHT_ARROW){
			drawFunction = drawHallway;
		}
		// To Dressing
		else if (keyCode === UP_ARROW){
			drawFunction = drawDressing;
		}
	}

	// From Kitchen
	else if (drawFunction === drawKitchen) {
		// To Hallway
		if (keyCode === LEFT_ARROW){
			drawFunction = drawHallway;
		}
		// To Laundry
		else if (keyCode === RIGHT_ARROW){
			drawFunction = drawLaundry;
		}
		// To Dining
		else if (keyCode === DOWN_ARROW){
			drawFunction = drawDining;
		}
	}

	// From Laundry
	else if (drawFunction === drawLaundry) {
		// To Kitchen
		if (keyCode === LEFT_ARROW){
			drawFunction = drawKitchen;
		}
	}

	// From Living
	else if (drawFunction === drawLiving) {
		// To Living Bathroom
		if (keyCode === LEFT_ARROW){
			drawFunction = drawLivingBathroom;
		}
		// To Dining 
		else if (keyCode === RIGHT_ARROW){
			drawFunction = drawDining;
		}
		// To Hallway
		else if (keyCode === UP_ARROW){
			drawFunction = drawHallway;
		}
	}

	// From Living Bathroom
	else if (drawFunction === drawLivingBathroom) {
		// To Living
		if (keyCode === RIGHT_ARROW){
			drawFunction = drawLiving;
		}
	}

	// From Dining
	else if (drawFunction === drawDining) {
		// To Living
		if (keyCode === LEFT_ARROW){
			drawFunction = drawLiving;
		}
		// To Kitchen
		else if (keyCode === UP_ARROW){
			drawFunction = drawKitchen;
		}
	}

	// From Dressing
	else if (drawFunction === drawDressing) {
		// To Bedroom
		if (keyCode === DOWN_ARROW){
			drawFunction = drawBedroom;
		}
		// To Bedroom Bathroom
		else if (keyCode === UP_ARROW){
			drawFunction = drawBedroomBathroom;
		}
	}

	// From Bedroom Bathroom
	else if (drawFunction === drawBedroomBathroom) {
		// To Dressing
		if (keyCode === DOWN_ARROW){
			drawFunction = drawDressing;
		}
	}
}
