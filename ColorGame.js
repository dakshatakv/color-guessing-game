var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("h1 span");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
// var easybtn = document.querySelector("#easybtn");
// var hardbtn = document.querySelector("#hardbtn");
var modebtns = document.querySelectorAll(".mode");

init();

function init(){
	setupModebtns();

	setupSquares();
 
 	resetting();
}

function setupModebtns(){
	for(var i=0; i<modebtns.length; i++){
	modebtns[i].addEventListener("click", function(){
		modebtns[0].classList.remove("selected");
		modebtns[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
		resetting();
	})
	}
}

function setupSquares(){
	for(var i=0; i<squares.length; i++){
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor == pickedColor){
			changeColor(pickedColor);
			message.textContent = "Correct!";
			h1.style.backgroundColor = pickedColor;
			reset.textContent = "PLAY AGAIN?";
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	})
	}
}

function resetting(){
	colors = generateRandomColors(numSquares);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	message.textContent = "";
	reset.textContent = "NEW COLORS";

	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelBlue";
}

reset.addEventListener("click", function(){
	resetting();
})

// easybtn.addEventListener("click", function(){
// 	easybtn.classList.add("selected");
// 	hardbtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.backgroundColor = "steelBlue";
// })

// hardbtn.addEventListener("click", function(){
// 	hardbtn.classList.add("selected");
// 	easybtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0; i<squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// 	h1.style.backgroundColor = "steelBlue";
// })


// for(var i=0; i<squares.length; i++){
// 	squares[i].addEventListener("click", function(){
// 		var clickedColor = this.style.backgroundColor;
// 		if(clickedColor == pickedColor){
// 			changeColor(pickedColor);
// 			message.textContent = "Correct!";
// 			reset.textContent = "PLAY AGAIN?";
// 		}
// 		else{
// 			this.style.backgroundColor = "#232323";
// 			message.textContent = "Try Again";
// 		}
// 	})
// }

function changeColor(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomColors());
	}

	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

