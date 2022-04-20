$(document).ready(function() {
	var n = prompt('enter number');
	while (! isNaturalNumber (n)) {
		n = prompt ('enter NaturalNumber');
	}
	for(var j=1; j<=n; j++){
		for(var i=1; i<=n; i++){
			if(i==1 || i==n || j==1 || j==n){
				document.write('*');
			}
			else{
				document.write('_');
			}
		}
		document.write('<br>')
	}

	function isNaturalNumber(n){
    	n = n.toString(); 
    	var n1 = Math.abs(n),
    		n2 = parseInt(n, 10);
    	return !isNaN(n1) && n2 === n1 && n1.toString() === n; 
	}
});