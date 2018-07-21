/* Solution Step3*/

var GitHubRepo= document.getElementById("exc");

var btn=document.getElementById("btn");
     btn.addEventListener("click",function() {

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET',"https://api.github.com/orgs/HackYourFuture/repos",);
   
    ourRequest.onload=function() {
    var ourData= JSON.parse(ourRequest.responseText);
    console.log(ourData);
    HtmlFetch(ourData);
   };
    
    ourRequest.send();
    
   });

function HtmlFetch(data) {

var HtmlString = "";


for (i=0;i<data.length;i++) {  

HtmlString += "<h2>" + data[i].name + ".</h2>";
}
GitHubRepo.insertAdjacentHTML('beforeend',HtmlString);
}




