document.getElementById("calcular").onclick=function(){calculate()};
function calculate()
{
	var n1=document.getElementById('num1').value;
	var n2=document.getElementById('num2').value;
	var n3=document.getElementById('num3').value;
	var res1=document.getElementById('res1');
	
	if(Number(n1)!=""&&Number(n2)!=""&&Number(n3)!="")
	{
			if(Number(n1)>Number(n2))
		{
			if(Number(n1)>Number(n3))
			{
				res1.innerHTML="<p>El mayor es: <span>" + n1 + "</span>" + "</p>";
			}
			else
			{
				res1.innerHTML="<p>El mayor es: <span>" + n3 + "</span>" + "</p>";

			}
		}
		else if(Number(n2)>Number(n3))
		{
			res1.innerHTML="<p>El mayor es: <span>" + n2 + "</span>" + "</p>";

		}
		else
		{
			res1.innerHTML="<p>El mayor es: <span>" + n3 + "</span>" + "</p>";

		}
	}
	else
	{
		alert("Rellena todos los campos");
		res1.innerHTML="";
	}
	
}

