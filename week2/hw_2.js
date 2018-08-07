document.write("HomeWork-1");
document.write('</em><br/>');
document.write('</em><br/>');

var totalDays =prompt("After how many days you want to meet with me ?:");


var newDate = new Date(Date.now()+totalDays*24*60*60*1000);

document.write("Today is:",new Date());

document.write('</em><br/>');

document.write("We are meeting on:",newDate);


document.write('</em><br/>');
document.write('</em><br/>');
document.write("HomeWork-2.3");
document.write('</em><br/>');



var n = 6;
var Stars = '';

for(var i = 1; i <= n; i++){
    
  for(var j = 1; j <= i; j++){
           
       Stars += '*' ;
       document.write('*');
  }
Stars += '\n' ;   
document.write('<br>');
}

console.log(Stars);



