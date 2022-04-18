$(document).ready(function() {
	var n = prompt('enter number');
	while (! isNaturalNumber (n)) {
		n = prompt ('enter NaturalNumber');
	}
	console.log(n.val());

	$('#hi').css({
		'background-color':'red',
	})

	function isNaturalNumber(n){
    n = n.toString(); 
    var n1 = Math.abs(n),
    	n2 = parseInt(n, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === n; 
}
});