function f1() {
    //function to make the text bold using DOM method
    document.getElementById("textarea1").style.fontWeight = "bold";
}
  
function f2() {
    //function to make the text italic using DOM method
    document.getElementById("textarea1").style.fontStyle = "italic";
}
  
function f3() {
    //function to make the text alignment left using DOM method
    document.getElementById("textarea1").style.textAlign = "left";
}
  
function f4() {
    //function to make the text alignment center using DOM method
    document.getElementById("textarea1").style.textAlign = "center";
}
  
function f5() {
    //function to make the text alignment right using DOM method
    document.getElementById("textarea1").style.textAlign = "right";
}
  
function f6() {
    //function to make the text in Uppercase using DOM method
    document.getElementById("textarea1").style.textTransform = "uppercase";
}
  
function f7() {
    //function to make the text in Lowercase using DOM method
    document.getElementById("textarea1").style.textTransform = "lowercase";
}
  
function f8() {
    //function to make the text capitalize using DOM method
    document.getElementById("textarea1").style.textTransform = "capitalize";
}
  
function f9() {
    //function to make the text back to normal by removing all the methods applied 
    //using DOM method
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";
}



function start() {
	webgazer.setGazeListener(function(data, elapsedTime) {
		if (data == null) {
			return;
		}
		var xprediction = data.x; //these x coordinates are relative to the viewport
		var yprediction = data.y; //these y coordinates are relative to the viewport
		console.log(elapsedTime); //elapsed time is based on time since begin was called
	}).begin();

	var prediction = webgazer.getCurrentPrediction();
	console.log(prediction);
	if (prediction) {
		var x = prediction.x;
		var y = prediction.y;
	}
}	