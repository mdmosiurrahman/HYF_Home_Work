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

if(result1 == result2){
  document.write("person1 is : " + result1);
  document.write("<br>");
  document.write("person2 is: " + result2);
}
else{
  document.write("person1 is : " + result1);
  document.write("<br>");
  document.write("person2 is: " + result2);
}

