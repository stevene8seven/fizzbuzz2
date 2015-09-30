/*
*/

$(document).ready(function(event){
	
	var input = parseInt(prompt("Enter a value"));

	if(isNan(input)){
		alert("bad input");
	}
	else{
		document.write(input);
	}

});



$('#begin').click(function(event){

	var count = 1;

	while(count < 100)
	{
		if (count%3 === 0){
			document.write("Fizz");
			document.write("<br>");

		}

		else if (count%5 === 0){
			document.write("Buzz");
			document.write("<br>");
		}

		else if (count%5 === 0 && count%3 === 0){
			document.write("FizzBuzz");
			document.write("<br>");
		}

		else{
			document.write(count);
			document.write("<br>");
			
		}

		count++;
	}//end while

}); //end function