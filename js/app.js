/*The program should print out each number  
from 1 to 100, replacing numbers 
divisible by both 3 and 5 with “fizz buzz”,
those divisible by 3 with “fizz”, and 
those divisible by 5 with “buzz”.

$('#add').click(function(event) {
		if( $('#input_text').val().trim().length == 0 ) {
				// alert("missing");
				$('#error').show();
				$('#input_text').val("");
		} else { 

		$('.items').append('<li class="item"><button class="remove">Mark Complete</button>' + $('#input_text').val() + '</li>');
		$('#input_text').val("");
		$('#error').hide();

		};	
		event.preventDefault();
	});

*/



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