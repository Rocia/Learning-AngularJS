app.factory('calculation', function () {     
return {         
calci: function (input1,input2,b) {             
if (!input1)                 
	return input1; 
else if (!input2)
	return input2; 
else 
	var a1 = parseInt(input1);
	var a2 = parseInt(input2);
	var func = b;
	var output = "";
	
	switch (func)
	{               
		case 1 : output = a1 + a2; break;
		case 2 : output = a1 - a2; break;
		case 3 : output = a1 * a2; break;
		case 4 : output = a1 / a2; break;
	}  
	console.log(output);
    return output;         
	}     
	}; 
}); 