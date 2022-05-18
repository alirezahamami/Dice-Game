var dice_num1 = Math.floor(Math.random() * 6) + 1;
var dice_num2 = Math.floor(Math.random() * 6) + 1;
if (dice_num1 == dice_num2) {
  document.querySelector("h1").innerHTML ="Draw";


}
else if (dice_num1 > dice_num2) {
  document.querySelector("h1").innerHTML ="Alireza won";
} else {
  document.querySelector("h1").innerHTML ="Soraya won";
}

var dice1=dice_num1.toString();
var dice2=dice_num2.toString();
var filename1=dice1+".png";
var filename2=dice2+".png";
document.querySelector(".first").setAttribute("src",filename1);
document.querySelector(".second").setAttribute("src",filename2);
