var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelBlue";
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    h1.style.backgroundColor = "steelBlue";
    messageDisplay.textContent = "";
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelBlue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for(var i = 0; squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // Adding color to the squares
    squares[i].style.backgroundColor = colors[i];

    //add click listener to the squares
    squares[i].addEventListener("click", function(){
       var clickedColor =  this.style.backgroundColor;

       //compare
       if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!"
           changeColors(pickedColor);
           h1.style.backgroundColor = pickedColor;
           resetButton.textContent = "Play Again?";
       }
       else{
           this.style.backgroundColor = "#232323";
           messageDisplay.textContent = "Try Again";
       }
    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", "+g+", "+b+")";
}