window.addEventListener('load', ()=>{ 
  document.addEventListener('mousedown', startPainting); 
  document.addEventListener('mouseup', stopPainting); 
  document.addEventListener('mousemove', sketch); 
}); 
  
const canvas = document.querySelector('#canvas'); 
const ctx = canvas.getContext('2d'); 
  
let coord = {x:0 , y:0};  
let paint = false; 
  
function getPosition(event){ 
  coord.x = event.clientX - canvas.offsetLeft; 
  coord.y = event.clientY - canvas.offsetTop; 
} 

function startPainting(event){ 
  paint = true; 
  getPosition(event); 
} 
function stopPainting(){ 
  paint = false; 
} 
  
function sketch(event){ 
  getPosition(event);
  if (!paint) return; 
  ctx.beginPath(); 
  ctx.lineWidth = 10; 
  ctx.lineCap = 'round'; 
  ctx.strokeStyle = 'white'; 
  ctx.moveTo(coord.x, coord.y); 
  ctx.lineTo(coord.x , coord.y); 
  ctx.stroke(); 
}

const button = document.getElementById('reset-canvas-button');
button.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})