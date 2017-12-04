promedio=function(){
	var n1=document.getElementById("txtn1").value;
	var n2=document.getElementById("txtn2").value;
	var n3=document.getElementById("txtn3").value;
	var promedio=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
	calcular(promedio);
}

calcular=function(promedio){
	if (promedio<13) {

		document.getElementById("resultado").innerHTML="su promedio es:  "+promedio.toFixed(2)+"<br>"
		+"Usted esta <br><font face='Times New Roman' size=6 color=red>DESAPROBADO <br><br> Vuelva en otra oportunidad</font>" ;
	}else{
		document.getElementById("resultado").innerHTML="su promedio es:  "+promedio.toFixed(2)+"<br>"
		+"Usted esta <br><font face='Times New Roman' size=6 color=green>APROBADO <br><br> Siga continuando</font>";
	}
}