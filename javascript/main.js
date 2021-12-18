function functionhistoryback(){
    history.back();
  }
 
  function insert(num){
             document.getElementById('1').value = document.getElementById('1').value+num;
             document.getElementById('a').value = document.getElementById('a').value+num;
             document.getElementById('b').value = document.getElementById('b').value+num;
             document.getElementById('c').value = document.getElementById('c').value+num;
             document.getElementById('d').value = document.getElementById('d').value+num;
             document.getElementById('e').value = document.getElementById('e').value+num;
          }
 
         moveonMax = function(id,field,nextFieldId){
              if(field.value.length == 1){
                  document.getElementById(nextFieldId).focus();
                  document.getElementById(id).style.backgroundColor = "#db6439";
              }
          }
 
             function myfunction(){
             var a = document.getElementById('1').value;
             var b = document.getElementById('a').value;
             var c = document.getElementById('b').value;
             var d = document.getElementById('c').value;
             var e = document.getElementById('d').value;
             var f = document.getElementById('e').value;
             var g = a+b+c+d+e+f;
             if(g.length == 6){
                 document.getElementById('change').value = "Next";
                 document.getElementById('change').style.color = "#db6439";
                 document.getElementById('e').style.backgroundColor = "#db6439";
             }
         }
  
         function gotowebsite(){
             var a =document.getElementById('change');
             if(a.value == "Next"){
                 window.open('https://codepen.io/webcreator12/pen/eYGWMKq', '_self');
             }
         }

         function functionfirst(){ 
         window.open('./index.html', '_self');
         }

         function functionsecond(){ 
         window.open('./pin.html', '_self');
         }