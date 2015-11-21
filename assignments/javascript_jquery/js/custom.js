$(document).ready(function(){

	var isLightOn = true;

	$("#lightSwitch").click(function(){
		flipTheLightSwitch();
	});

	$("#couch").click(function(){
		var windowWidth = $(window).width();

		console.log(windowWidth)
		console.log( $("#couch").position() )

		if($("#couch").position().left <= windowWidth - 150 ){
			$("#couch").animate( {left:"+=100px"} );
		}else{
			$("#couch").animate( {left:"-=100px"} );
		}
	});


	function flipTheLightSwitch(){
		if(isLightOn){
			
			$("body").css("background", "#244c6d");
			$("#lightSwitch").val("Turn light On");
			$("#couch").fadeOut(3000);
			isLightOn = false;
		}else{
			
			$("body").css("background", "#ffe98d");
			$("#lightSwitch").val("Turn Light Off");
			$("#couch").fadeIn(3000);
			isLightOn = true;
		}
	}
});