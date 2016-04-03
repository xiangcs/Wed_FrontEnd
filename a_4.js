function asm1() {
	
	var i=1;
	var result=" ";
	for (i=1;i<=10;i++){	
		result+=i+"\n";
	}
	document.getElementById("demo1").innerHTML=result;
}
function asm2() {
	
	var i=1;
	var result=" ";
	for (i=1;i<=10;i++){	
		result+=11-i+"\n";
	}
	document.getElementById("demo2").innerHTML=result;
}
function asm3() {
	
	var i=1;
	var result=" ";
	for (i=1;i<=50;i++){
		if(i%2==1){
			result+=i+"\n";
		}
	}
	document.getElementById("demo3").innerHTML=result;
}
function asm4() {
	
	var i=1;
	var result=" ";
	for (i=1;i<=100;i++){
		if(i%2==0){
			result+=i+"\n";
		}
	}
	document.getElementById("demo4").innerHTML=result;
}
function asm5() {
	var i=1;
	var result=" ";
	for (i=40;i<=60;i++){
			result+=i+"\n";
	}
	document.getElementById("demo5").innerHTML=result;
}
function asm6() {
	var i=1;
	var result=" ";
	for (i=80;i<=100;i++){
			result+=i+"\n";
	}
	document.getElementById("demo6").innerHTML=result;
}
function asm7() {
	var a=+document.getElementById("input1").value; //get the number using "+"
	var i=1;
	var N=10+a;
	var result=" ";
	// alert(typeof(null)); null is object
	if (a=="1"){
		for (i=a;i<=N;i++){
			result+=i+"\n";
		}
		document.getElementById("demo7").innerHTML=result;
	} else if(a=="2"){
		for (i=a;i<=N;i++){
			result+=i+"\n";
		}
		document.getElementById("demo7").innerHTML=result;
	}
	else if(a=="3"){
		for (i=a;i<=N;i++){
			result+=i+"\n";
		}
		document.getElementById("demo7").innerHTML=result;
	}
	else if(a=="4"){
		for (i=a;i<=N;i++){
			result+=i+"\n";
		}
		document.getElementById("demo7").innerHTML=result;
	}
	else if(a=="5"){
		for (i=a;i<=N;i++){
			result+=i+"\n";
		}
		document.getElementById("demo7").innerHTML=result;
	}
}
function asm8() {
	var x=document.getElementById("input2").value; //get the number using "+"
	//alert(typeof x);
	var a=x.split("");
	var result=" ";
	var i=0;
	for (i=0;i<a.length;i++) {
		if (a[i]==1){
			result+="One ";	
		} else if(a[i]==2){	
			result+="Two ";		
		} else if(a[i]==3){	
			result+="Three ";		
		} else if(a[i]==4){	
			result+="Four ";		
		} else if(a[i]==5){	
			result+="Five ";		
		} else if(a[i]==6){	
			result+="Six ";		
		} else if(a[i]==7){	
			result+="Seven ";		
		}else if(a[i]==8){	
			result+="Eight ";		
		}else if(a[i]==9){	
			result+="Nine ";		
		}else if(a[i]==0){	
			result+="Zero ";		
		}
		document.getElementById("demo8").innerHTML=result;
	}
}
function asm9() {
	var a=document.getElementById("input3").value; //get the number using "+"
	
	var result=" ";
	
	if (a=="1"){
		
			result="One"+"\n";
		
		document.getElementById("demo9").innerHTML=result;
	} else if(a=="2"){
		
		result="Two"+"\n";		
		document.getElementById("demo9").innerHTML=result;
	}else if(a=="3"){
		
		result="Three"+"\n";		
		document.getElementById("demo9").innerHTML=result;
	}else if(a=="4"){
		
		result="Four"+"\n";		
		document.getElementById("demo9").innerHTML=result;
	}else if(a=="5"){
		
		result="Five"+"\n";		
		document.getElementById("demo9").innerHTML=result;
	} else {
		document.getElementById("demo9").innerHTML="Please enter a valid number.";
	}
}
function asm10() {
	var a=+document.getElementById("input4").value; //get the number using "+"
	
	var result=" ";
	
	if (a>=1&&a<=10){		
			result="The number is between 1 and 10"+"\n";	
		document.getElementById("demo10").innerHTML=result;
	} else if (a>=11&&a<=20){		
			result="The number is between 11 and 20"+"\n";	
		document.getElementById("demo10").innerHTML=result;
	} else if (a>=21&&a<=30){		
			result="The number is between 21 and 30"+"\n";	
		document.getElementById("demo10").innerHTML=result;
	}else if (a>=31&&a<=40){		
			result="The number is between 31 and 40"+"\n";	
		document.getElementById("demo10").innerHTML=result;
	}else if (a>=41&&a<=50){		
			result="The number is between 41 and 50"+"\n";	
		document.getElementById("demo10").innerHTML=result;
	}else {
		document.getElementById("demo10").innerHTML="Please enter a valid number.";
	}
}
function asm11() {
	var a=+document.getElementById("input5").value; //get the number using "+"
	
	var result=" ";
	
	if (a<50||a>200){		
			result="The number is a valid number"+"\n";	
		document.getElementById("demo11").innerHTML=result;
	} else if (a>=50&&a<=200){		
		result="The number is a good number"+"\n";	
		document.getElementById("demo11").innerHTML=result;
	} else {
		result="The number is an invalid number"+"\n";	
		document.getElementById("demo11").innerHTML=result;
	}
}
function asm12() {
	var a=document.getElementById("input6").value; //get the number using "+"
	
	var result=" ";
	
	if (a=="1"){
		
			result="One"+"\n";
		
		document.getElementById("demo12").innerHTML=result;
	} else if(a=="2"){
		
		result="Two"+"\n";		
		document.getElementById("demo12").innerHTML=result;
	}else if(a=="3"){
		
		result="Three"+"\n";		
		document.getElementById("demo12").innerHTML=result;
	}else if(a=="4"){
		
		result="Four"+"\n";		
		document.getElementById("demo12").innerHTML=result;
	}else if(a=="5"){
		
		result="Five"+"\n";		
		document.getElementById("demo12").innerHTML=result;
	} else {
		document.getElementById("demo12").innerHTML="Please enter a valid number.";
	}
}
function asm13() {
	var a=+document.getElementById("input7").value; //get the number using "+"	
	var result=" ";
	
	if (a>=6&&a<=10){
		
			result="please enter a proper number"+"\n";
		
		document.getElementById("demo13").innerHTML=result;
	} else {
		document.getElementById("demo13").innerHTML="Please enter a valid number.";
	}
}
function asm14() {
	var a=+document.getElementById("input8").value; //get the number using "+"
	
	var result=" ";
	var n=a%2;
	var i=0;
	//alert(n);
	if (n==0){
		for (i=0;i<10;i++) {
			result+=a+2*i+"\n";
			
		}	
		document.getElementById("demo14").innerHTML=result;
	} else if (n==1){
		for (i=0;i<10;i++) {
			result+=a+2*i+"\n";	
		}	
		document.getElementById("demo14").innerHTML=result;
	} else {
		document.getElementById("demo14").innerHTML="Please enter a valid number.";
	}
}
function asm15() {
	var a=+document.getElementById("input9").value; //get the number using "+"
	
	var result=" ";
	var n=a%2;
	var i=0;
	//alert(n);
	if (n==0){
		for (i=0;i<5;i++) {
			result+=a-2*i+"\n";
			
		}	
		document.getElementById("demo15").innerHTML=result;
	} else if (n==1){
		for (i=0;i<5;i++) {
			result+=a-2*i+"\n";	
		}	
		document.getElementById("demo15").innerHTML=result;
	} else {
		document.getElementById("demo15").innerHTML="Please enter a valid number.";
	}
}