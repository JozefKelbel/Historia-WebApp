var dispDiv = document.getElementById("display2");
var bgPosL = 0;
var move = document.getElementById("buttons");
var time = 0;

// alert on how to move around the timeline
window.onload = function(){ alert("To move around time line you must use the arrow keys (bottom left) on your keyboard.")};

// function for moving around the timeline
document.addEventListener("keydown",function(ev){
    console.log(ev);
   if(ev.keyCode == 37){
       bgPosL -= 0.20;
    dispDiv.style.backgroundPosition = bgPosL+"% center";
    time += 20;
    move.style.left = time+"px"}
    else if(ev.keyCode == 39){
    bgPosL += 0.20;
    dispDiv.style.backgroundPosition = bgPosL+"% center";
    time -= 20;
    move.style.left = time+"px" 
}
});


//animations
/*document.getElementById("Airplanes").animate([
  // keyframes
  { transform: 'translateX(-40px)' }, 
  { transform: 'translateX(8000px)' }
], { 
  // timing options
  duration: 30500,
  iterations: Infinity
});

//animations
document.getElementById("Airplane").animate([
  // keyframes
  { transform: 'translateX(-40px)' }, 
  { transform: 'translateX(8000px)' }
], { 
  // timing options
  duration: 30000,
  iterations: Infinity
}); */

// functions for showing boxes once clicking on year button
document.getElementById("button1").addEventListener("click", function(){
   document.getElementById("box").style.display = "block";
    document.getElementById("video1").style.display = "block";
    document.getElementById("close").style.display = "block";
    
});

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("box").style.display = "none";
    document.getElementById("video1").style.display = "none";
    document.getElementById("close").style.display = "none";
});

document.getElementById("button2").addEventListener("click", function(){
   document.getElementById("box2").style.display = "block";
    document.getElementById("close2").style.display = "block";
    
});

document.getElementById("close2").addEventListener("click", function(){
    document.getElementById("box2").style.display = "none";
    document.getElementById("close2").style.display = "none";
});
 
document.getElementById("button3").addEventListener("click", function(){
   document.getElementById("box3").style.display = "block";
    document.getElementById("close3").style.display = "block";
    
});

document.getElementById("close3").addEventListener("click", function(){
    document.getElementById("box3").style.display = "none";
    document.getElementById("close3").style.display = "none";
});

document.getElementById("button4").addEventListener("click", function(){
   document.getElementById("box4").style.display = "block";
    document.getElementById("close4").style.display = "block";
    
});

document.getElementById("close4").addEventListener("click", function(){
    document.getElementById("box4").style.display = "none";
    document.getElementById("close4").style.display = "none";
});

document.getElementById("button5").addEventListener("click", function(){
   document.getElementById("box5").style.display = "block";
    document.getElementById("close5").style.display = "block";
    
});

document.getElementById("close5").addEventListener("click", function(){
    document.getElementById("box5").style.display = "none";
    document.getElementById("close5").style.display = "none";
});

document.getElementById("button6").addEventListener("click", function(){
   document.getElementById("box6").style.display = "block";
    document.getElementById("close6").style.display = "block";
    
});

document.getElementById("close6").addEventListener("click", function(){
    document.getElementById("box6").style.display = "none";
    document.getElementById("close6").style.display = "none";
});