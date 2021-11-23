var questionNext = document.getElementById("nextBtn")
var questionElement = document.getElementById("question");

if(questionNext){
    questionNext.addEventListener('click', nextQuestion, false);}

var questions = ['What is your name?', 'Did you like the service?', 'Will you recomment this to anyone?'];

var currquestion = 0;

function nextQuestion(){
   
    x =  document.getElementById("question");
    x.innerHTML = (questions[currquestion]);
    if(currquestion == 3){
        currquestion = 0;
    }else {
        currquestion++;
    } 
 
 }

function start() {
    window.saveDataAcrossSessions = true;
	webgazer.setGazeListener(function(data, elapsedTime) {
		if (data == null) {return;}

        if(data.x > 600){
            var x = document.getElementById("myBtn").style.background='#008000';
            x = document.getElementById("myBtn").click();
            questionNext.click();
            document.getElementById("myBtn2").style.background='#FFFFFF';
        }

        if(data.x > 900){ 
            var x = document.getElementById("myBtn2").style.background='#FF0000';
            x = document.getElementById("myBtn").click();
            questionNext.click();
            document.getElementById("myBtn").style.background='#FFFFFF';

        }

		console.log(data);
		var xprediction = data.x; //these x coordinates are relative to the viewport
		var yprediction = data.y; //these y coordinates are relative to the viewport
		console.log(elapsedTime); //elapsed time is based on time since begin was called

     
         
	}).begin(); 
   
}	

function selectedState(){
    var y = document.querySelector('.yesBox');
    if(y.style.display === "none"){
        y.style.display = "block";
    }else {
        y.style.display = "none";
    }

}

function selectedState2(){
    var y = document.querySelector('.noBox');
    if(y.style.display === "none"){
        y.style.display = "block";
    }else {
        y.style.display = "none";
    }
}
