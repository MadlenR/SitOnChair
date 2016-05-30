document.addEventListener("DOMContentLoaded", function (){
    var next = document.querySelector("#next");
    var prev = document.querySelector("#prev");
    
    var lis = document.querySelectorAll(".article_1 > ul > li");
    var counterPic = [0];
    
    lis[counterPic].classList.add("visible");
    
//////////////// EVENT DLA GUZIKA PREV//////////////    
    prev.addEventListener("click", function(event) {
        lis[counterPic].classList.remove("visible");
        counterPic--;
        
        if ( counterPic < 0 ){
            counterPic = 0;         
        }
        
        lis[counterPic].classList.add("visible");
    });
    
    
/////////AKTUALNIE WYŚWIETLANY OBRAZEK//////////
    lis[counterPic].classList.add("visible");
    
//////////////// EVENT DLA GUZIKA NEXT//////////////
    next.addEventListener("click", function(event) {
        lis[counterPic].classList.remove("visible");
        counterPic++;
      
         if ( counterPic > lis.length-1){
             counterPic= lis.length-1;
            
        }
        
        lis[counterPic].classList.add("visible");
        
    });
});