var dispDiv = document.getElementById("display2");
var bgPosD = 0;
var time = 0;
var chur = document.getElementById("churchill");
var bgpos1 = 0;
var ros = document.getElementById("rosevellt"),
    bgpos2 = 0,
    engflag = document.getElementById("engflag"),
    usaflag = document.getElementById("usaflag"),
    naziflag = document.getElementById("naziflag"),
    hit = document.getElementById("hitler"),
    russ = document.getElementById("russian"),
    stalin = document.getElementById("stalin"),
    italy = document.getElementById("italian"),
    muss = document.getElementById("muss"),
    start = document.getElementById("start"),
    guid = document.getElementsByClassName("guid"),
    box = document.getElementById("box"),
    p1 = document.getElementById("p1"),
    p2 = document.getElementById("p2"),
    box1 = document.getElementById("box2"),
    close1 = document.getElementById("close1"),
    box2 = document.getElementById("box3"),
    close2 = document.getElementById("close2"),
    box3 = document.getElementById("box4"),
    close3 = document.getElementById("close3"),
    box4 = document.getElementById("box5"),
    close4 = document.getElementById("close4");




start.addEventListener("click", function(){
   box.style.display = "none";
    start.style.display = "none";
});


document.addEventListener("keydown", function(ev){
    if(ev.keyCode == 49){
        engflag.style.display= "block";
        chur.style.display= "block";
        
    }
      else if(ev.keyCode == 50){
            usaflag.style.display= "block";
            ros.style.display = "block";
          chur.style.display = "none";
        }
    
     else if(ev.keyCode == 51){
            naziflag.style.display= "block";
            hit.style.display = "block";
          chur.style.display = "none";
         ros.style.display = "none";
        }
    
      else if(ev.keyCode == 52){
            russ.style.display= "block";
            stalin.style.display = "block";
          chur.style.display = "none";
         ros.style.display = "none";
          hit.style.display = "none";
        }
    
    else if(ev.keyCode == 53){
            italy.style.display= "block";
            muss.style.display = "block";
          chur.style.display = "none";
         ros.style.display = "none";
          hit.style.display = "none";
        stalin.style.display = "none";
        
        }
});

chur.addEventListener("click", function(){
   box1.style.display = "block";
    close1.style.display = "block";
});

close1.addEventListener("click", function(){
    box1.style.display = "none";
    close1.style.display = "none";
});

ros.addEventListener("click", function(){
   box2.style.display = "block";
    close2.style.display = "block";
});

close2.addEventListener("click", function(){
    box2.style.display = "none";
    close2.style.display = "none";
});

hit.addEventListener("click", function(){
   box3.style.display = "block";
    close3.style.display = "block";
});

close3.addEventListener("click", function(){
    box3.style.display = "none";
    close3.style.display = "none";
});

stalin.addEventListener("click", function(){
   box4.style.display = "block";
    close4.style.display = "block";
});

close4.addEventListener("click", function(){
    box4.style.display = "none";
    close4.style.display = "none";
});

muss.addEventListener("click", function(){
   box6.style.display = "block";
    close5.style.display = "block";
});

close5.addEventListener("click", function(){
    box6.style.display = "none";
    close5.style.display = "none";
});
    

//
//document.addEventListener("keydown",function(ev){
//    console.log(ev);
//   if(ev.keyCode == 38){
//       bgPosD -= 0.40;
//    dispDiv.style.backgroundPositionY = bgPosD+"%";}
//    
//    if(ev.keyCode == 40){
//    bgPosD += 0.40;
//    dispDiv.style.backgroundPositionY = bgPosD+"%";
//        
//        
//
//}
//    
//       if(ev.keyCode == 38){
//       bgpos1 -= 2.5;
//    chur.style.bottom = bgpos1+"%";}
//    if(ev.keyCode == 40){
//    bgpos1 += 2.5;
//    chur.style.bottom = bgpos1+"%";
//
//}
//    
//       if(ev.keyCode == 38){
//       bgpos2 -= 5.5;
//    ros.style.bottom = bgpos2+"%";}
//    if(ev.keyCode == 40){
//    bgpos2 += 5.5;
//    ros.style.bottom = bgpos2+"%";}
//});
