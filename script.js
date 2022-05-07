function compute()
{
    //validate principal amount
    if(!checkPrincipal()) return 
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * (rate / 100);
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <mark>" + principal + 
        "</mark>,\<br\>at an interest rate of <mark>" + rate + 
        "%</mark> \<br\>You will receive an amount of <mark>" + interest + 
        "</mark>, \<br\>in the year <mark>" + year + "</mark> \<br\>";
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

function checkPrincipal(){
    var principal = document.getElementById("principal");
    if(principal.value < 1){
        alert("Enter a positive value in the Principal input")
        principal.focus()
        return false
    }
    return true
}