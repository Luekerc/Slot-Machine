$(document).ready(onReady);
function onReady() {
// The js for this project was modelled after saurabh odhyan https://github.com/odhyan/slot
// #button
// .panel1, .panel2, .panel3

function runSlots(){
	var a;
	var b;
	var c;

	a = Math.floor((Math.random()*9)+1);

	b = Math.floor((Math.random()*9)+1);
	c = Math.floor((Math.random()*9)+1);
	
	$(".panel1").html(a);
	$(".panel2").html(a);
	$(".panel3").html(a);
	 setTimeout(function() {
	$(".panel2").html(b);
	 }, 100);
	  setTimeout(function() {
	$(".panel3").html(c);
	 }, 200);
	if(a===b&&b===c){
		$('.lose').html("");
		$('.win').html("YOU WIN!!!");

	}else{
		$('.win').html("");
		$('.lose').html("TRY AGAIN");
	}

}


$("#button").click(function(){
	console.log('clicked');
	runSlots();
});

}