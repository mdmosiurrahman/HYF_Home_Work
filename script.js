var  hYF06 = [    'Zeeshan Haider', 
                  'Anas', 
                  'Sajid',
                  'Anuradha',
                  'Gary', 
                  'Marco', 
                  'Ehsan',
                  'Haretha',
                  'Krishna',
                  'Mohammad Azizul Huq',
                  'Mohammad Mosiur Rahman',
                  'Samara', 
                  'Vignesh', 
                  'Zoey Zou', 
                  'Mohammad Subhiyeh'];


function randName(){
  var array_leng = hYF06.length;
  return Math.floor(Math.random()*array_leng)
}
var result1 = hYF06[randName()];
var result2 = hYF06[randName()];

function printResults(status){
  document.write(status);
  document.write("<br>");
  document.write("person1 is : " + result1);
  document.write("<br>");
  document.write("person2 is: " + result2);
  document.write("<br>");
}

// function writeParameter(num1,num2,param,text){
//     document.write(param);
//     document.write(num1*num2);
//     document.write(text);   
//     document.write("<br>");
//
// }
//
//
//writeParameter(2,3,"sddsd","sohel");
//writeParameter(10,8,"arash","fdfd");
//writeParameter(4,5,"eginio","capuini")



if(result1 == result2){
 printResults("The results were simmilar");

}
else{
  printResults("The results were not simmilar");
}


// DOM manipulation

/*var el= document.getElementById('title');

//el.style.background="blue";
//el.style.color= "red";
//el.style.width= "500px";

el.style.cssText="background:blue; color:red; width:500px";// this line same as like top of three line code
el.style.cssText +="height:100px;"// This line will concat height property*/



