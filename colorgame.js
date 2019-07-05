var numSquares=6;
var colors=generateRandomColors(numSquares);
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");
var squares=document.querySelectorAll(".square");


 
easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{	if(colors[i]){
		squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})
hardBtn.addEventListener("click",function(){
     hardBtn.classList.add("selected");
     easyBtn.classList.remove("selected");
     numSquares=6;
    colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{	
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
		
	}

})
colorDisplay.textContent=pickedColor;
resetButton.addEventListener("click",function(){
	//generate all new colors 
	//new random color from array
	//change colors of squares
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelBlue";
	messageDisplay.textContent="";
	this.textContent="New Colors";
})


for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			resetButton.textContent="Play Again!"; 
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again"
		}

	})
}

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	//red from 0 to 255
	var r=Math.floor(Math.random()*256);
	//green from 0 to 255
	var g=Math.floor(Math.random()*256);
	//blue from 0 to 255
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}