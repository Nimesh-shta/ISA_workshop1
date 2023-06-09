function compute() 
{
    var principal = parseInt(document.getElementById("principal").value);
    
    if (principal <= 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return;
    }
  
    var Rate = parseFloat(document.getElementById("rate").value);
    var Years = parseInt(document.getElementById("years").value);
  
    var interest = (principal * Years * Rate) / 100;
    var amount = principal + interest;
  
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit " + principal + ",";
    result.innerHTML += "at an interest rate of " + Rate + "%.<br>";
    result.innerHTML += "You will receive an amount of $" + amount + ", ";
    result.innerHTML += "in the year " + (new Date().getFullYear() + Years) + ".";
  }
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}
