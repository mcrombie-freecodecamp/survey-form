
//GREEN-MAGENTA
document.getElementById("button-green-magenta").addEventListener("click", function(){
    changeColors("green","magenta");

})

//RED-CYAN
document.getElementById("button-red-cyan").addEventListener("click", function(){
    changeColors("red","cyan");

})

//BLUE-YELLOW
document.getElementById("button-blue-yellow").addEventListener("click", function(){
    changeColors("blue","yellow");

})

//RED-GREEN
document.getElementById("button-red-green").addEventListener("click", function(){
    changeColors("red","green");

})

//YELLOW-PURPLE
document.getElementById("button-yellow-purple").addEventListener("click", function(){
    changeColors("yellow","purple");

})

//ORANGE-BLUE
document.getElementById("button-orange-blue").addEventListener("click", function(){
    changeColors("orange","blue");

})

function changeColors(mainColor, secondaryColor){
        //set main color in h1, h2, and description
        var h1 = document.getElementsByTagName("h1");
        for(let i = 0; i < h1.length; i++){
            h1[i].style.backgroundColor = mainColor;
        }

        var h2 = document.getElementsByTagName("h2");
        for(let i = 0; i < h2.length; i++){
            h2[i].style.backgroundColor = mainColor;
        }

        document.getElementById("description").style.color = mainColor;

            //set secondary color to page
        document.querySelector(".page").style.backgroundColor = secondaryColor;

}



//GETTING FORM DATA 
new FormData(document.querySelector('form'));
serialize(document.forms[0]);