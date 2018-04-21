//animations for tank, plane, and background movemment
document.getElementById("Airplane").animate([
  // keyframes
  { transform: 'translateX(-40px)' }, 
  { transform: 'translateX(6090px)' }
], { 
  // timing options
  duration: 20500,
  iterations: Infinity
});

document.getElementById("Tank").animate([
  // keyframes
  { transform: 'translateX(-40px)' }, 
  { transform: 'translateX(1090px)' }
], { 
  // timing options
  duration: 50500,
  iterations: Infinity
});

document.getElementById("Layer_1").animate([
  // keyframes
  { transform: 'translateX(0px)' }, 
  { transform: 'translateX(-1090px)' }
], { 
  // timing options
  duration: 60500,
  iterations: Infinity
});

document.getElementById("Tank2").animate([
  // keyframes
  { transform: 'translateX(0px)' }, 
  { transform: 'translateX(1090px)' }
], { 
  // timing options
  duration: 50500,
  iterations: Infinity
});



