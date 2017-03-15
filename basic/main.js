$(document).ready(function(){
	var sOne = true
	var sTwo = true
	var sThree = true

	$(".hOne").on("click", function(){
		if(sOne){
			$(".one").addClass("selector")
			$(".pOne").addClass("pHide")	
			sOne = false
		} else {
			$(".one").removeClass("selector")
			$(".pOne").removeClass("pHide")	
			sOne = true
		}
	})
	
	$(".hTwo").on("click", function(){
		if(sTwo){
			$(".two").addClass("selector")
			$(".pTwo").addClass("pHide")
			sTwo = false
		} else {
			$(".two").removeClass("selector")
			$(".pTwo").removeClass("pHide")
			sTwo = true
		}
	})

	$(".hThree").on("click", function(){
		if(sThree){
			$(".three").addClass("selector")
			$(".pThree").addClass("pHide")
			sThree = false
		} else {
			$(".three").removeClass("selector")
			$(".pThree").removeClass("pHide")
			sThree = true
		}
	})

})