var randomColor = "";
for(var i=0; i < 6; i++){
  randomColor += Math.round(Math.random() * 10);
}
document.body.bgColor = "#" + randomColor;
