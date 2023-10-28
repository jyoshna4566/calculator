function compute() {
    var principal = Number(document.getElementById("principal").value);
    var rate = Number(document.getElementById("rate").value);
    var years = Number(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = interest;

	if(principal < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	} else {
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,\<br\>at an interest rate of <mark>" + rate + " % </mark>\<br\>You will receive an amount of <mark>" + amount + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>"
    }        

    return;
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "  %";
}