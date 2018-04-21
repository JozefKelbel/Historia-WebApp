var dispDiv = document.getElementById("display2");
var bgPosL = 0;
var move = document.getElementById("buttons");
var time = 0;

// function for moving around the timeline
document.addEventListener("keydown",function(ev){
    console.log(ev);
   if(ev.keyCode == 37){
       bgPosL -= 0.70;
    dispDiv.style.backgroundPosition = bgPosL+"% center";
    time += 70;
    move.style.left = time+"px"}
    else if(ev.keyCode == 39){
    bgPosL += 0.70;
    dispDiv.style.backgroundPosition = bgPosL+"% center";
    time -= 70;
    move.style.right = time+"px" 
}
});

