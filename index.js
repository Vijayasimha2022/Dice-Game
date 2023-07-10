var dice=Math.floor(Math.random()*6);
console.log(dice);
if (dice ==1){
    document.querySelector("img").setAttribute("src","./images/dice1.png");
}
else if(dice ==2){
    document.querySelector("img").setAttribute("src","./images/dice2.png");
}
else if(dice ==3){
    document.querySelector("img").setAttribute("src","./images/dice3.png");
}
else if(dice ==4){
    document.querySelector("img").setAttribute("src","./images/dice4.png");
}
else if(dice ==5){
    document.querySelector("img").setAttribute("src","./images/dice5.png");
}
else {
    document.querySelector("img").setAttribute("src","./images/dice6.png");
}



var dice2=Math.floor(Math.random()*6);

if (dice2 ==1){
    document.querySelector(".player2 > img").setAttribute("src","./images/dice1.png");
}
else if(dice2 ==2){
    document.querySelector(".player2 > img").setAttribute("src","./images/dice2.png");
}
else if(dice2 ==3){
    document.querySelector(".player2 > img").setAttribute("src","./images/dice3.png");
}
else if(dice2 ==4){
    document.querySelector(".player2 > img").setAttribute("src","./images/dice4.png");
}
else if(dice2 ==5){
    document.querySelector(".player2 > img").setAttribute("src","./images/dice5.png");
}
else {
    document.querySelector(".player2 > img").setAttribute("src","./images/dice6.png");
}




if (dice == dice2){
    document.querySelectors("h1").textContent="Draw"
}
else if (dice > dice2){
    document.querySelectors("h1").textContent="player 1 won"
}
else{
    document.querySelectors("h1").textContent="player 2 won"
}