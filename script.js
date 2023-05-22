function calculate(){
   var a= parseInt(document.getElementById("book1").value);
   var b= parseInt(document.getElementById("book2").value);
   var c= parseInt(document.getElementById("book3").value);
   var d= parseInt(document.getElementById("book4").value);
   var e= parseInt(document.getElementById("book5").value);
   var f= parseInt(document.getElementById("book6").value);
   var g= parseInt(document.getElementById("book7").value);

   if(a>20 || b>20|| c>20|| d>20|| e>20|| f>20|| g>20){
    alert("Please enter correct marks");
   }
   else{
    var obtain=a+b+c+d+e+f+g;
    document.getElementById("obtain").innerHTML=obtain;

    var per=obtain/140*100;
    document.getElementById("percent").innerHTML=per.toFixed(2);
     if(a>7 && b>7 && c>7 && d>7 && e>7 && e>7 && f>7 ){
        document.getElementById("status").innerHTML="<span style='color:#027148; font-size: 18px; font-weight: bold;'> Pass";
     }
     else{
        document.getElementById("status").innerHTML="<span style='color:red; font-size: 18px; font-weight: bold;'> Fail";
     }

if
    (per>=90){
        document.getElementById("grade").textContent="A+";   
    }

    else if
    (per>=75){
        document.getElementById("grade").textContent="A";   
    }
    else if
    (per>=60){
        document.getElementById("grade").textContent="B+";   
    }
    else if
    (per>=50){
        document.getElementById("grade").textContent="B";   
    }
    else if
    (per>=40){
        document.getElementById("grade").textContent="C";   
    }
    else if
    (per>=35){
        document.getElementById("grade").textContent="D";   
    }


    if
    (per>=90){
        document.getElementById("remark").textContent="Exelllent";   
    }

    else if
    (per>=75){
        document.getElementById("remark").textContent="Distinction";   
    }
    else if
    (per>=60){
        document.getElementById("remark").textContent="Very Good";   
    }
    else if
    (per>=50){
        document.getElementById("remark").textContent="Good But Satisfactory ";   
    }
    else if
    (per>=40){
        document.getElementById("remark").textContent="Keep hard work";   
    }
    else if
    (per>=35){
        document.getElementById("remark").textContent="Need more hard work";   
    }


   }
   return false;
}