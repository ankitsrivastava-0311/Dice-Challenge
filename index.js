document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){

var randomnumber1= Math.random();
randomnumber1=Math.floor((randomnumber1*6)+1);


var randomDice = "dice" + randomnumber1 + ".png";
var imagesource = "images/" + randomDice;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", imagesource);


var randomnumber2= Math.random();
randomnumber2=Math.floor((randomnumber2*6)+1);


var randomDice = "dice" + randomnumber2 + ".png";
var imagesource = "images/" + randomDice;

var image1=document.querySelectorAll("img")[1];

image1.setAttribute("src", imagesource);

if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomnumber2>randomnumber1)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML="DRAW!";
}}
