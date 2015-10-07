/*
radix argument on parseInt function
*/

function getInput(){
	var input = parseInt(prompt("Enter a value"), 10);

	while(isNaN(input)){
		alert("bad input");
		input = parseInt(prompt("Enter a value"), 10);
	}

	document.write(input);

	return input;
}



function fizzBuzz(input){

	var count = 1;

	while(count < input)
	{

		if (count%5 === 0 && count%3 === 0){
			document.write("FizzBuzz");
			document.write("<br>");
		}

		else if (count%3 === 0){
			document.write("Fizz");
			document.write("<br>");

		}

		else if (count%5 === 0){
			document.write("Buzz");
			document.write("<br>");
		}

		else{
			document.write(count);
			document.write("<br>");
			
		}

		count++;
	}//end while

}

var userInput = getInput();


$('#begin').click(function(){

fizzBuzz(userInput);

}); //end function