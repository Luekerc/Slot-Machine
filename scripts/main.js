$(document).ready(onReady);
function onReady() {
// The js for this project was modelled after saurabh odhyan https://github.com/odhyan/slot
// #button
// .panel1, .panel2, .panel3

function runSlots(){
 
	var a = Math.floor((Math.random()*9)+1);
	var b = Math.floor((Math.random()*9)+1);
	var c = Math.floor((Math.random()*9)+1);
	$(".panel1").html(a);
	$(".panel2").html(b);
	$(".panel3").html(c);
	if(a===b&&b===c){
		$('.lets-play').html("YOU WIN!");
	}else{
		$('.lets-play').html("TRY AGAIN");
	}
}

$("#button").click(function(){
	console.log('clicked');
	runSlots();
});

}