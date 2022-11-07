window.onload =function() {
    var searchbtn= document.querySelector("#search");
    console.log(searchbtn);
    var httpRequest;
    var field=document.querySelector("#text");
    console.log(field);
    var hero;
    var resultDiv= document.querySelector("#result");
    console.log(resultDiv);

    

    searchbtn.addEventListener('click', function(element){
        element.preventDefault();
        httpRequest= new XMLHttpRequest();
        hero=document.querySelector("#text").value.trim();
        console.log(hero);
         httpRequest.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                document.getElementById("result").innerHTML = this.responseText;
            }
         }
         httpRequest.open('GET', 'superheroes.php?h='+hero);
         httpRequest.send();
       // httpRequest.open('GET', url);
       // httpRequest.send();
    });

    /***function loadList(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                var response= httpRequest.responseText;
                alert(response);
                
            }else{
                alert("not displaying php");
            }
        }
    }
    */
   



}