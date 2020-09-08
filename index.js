var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);
var randomDice1Image = "dice"+randomNumber1+".png"; 
var randomImage1source =randomDice1Image;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1source);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6)+1);
var randomDice2Image = "dice"+randomNumber2+".png";
var randomImage2source = randomDice2Image;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2source);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Refresh Me";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 won";
}
else{
    document.querySelector("h1").innerHTML="Player 2 won 🚩";
}
