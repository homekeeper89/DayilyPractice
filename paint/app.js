const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d");

ctx.strokeStyle="#2c2c2c";
ctx.lineWidth=2.5;

function startPainting(){
    painting = true
}

let painting = false;

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y)
    }else{
        ctx.lineTo(x, y);
        ctx.stroke()
    }
}

function onMouseDown(event){
    console.log(event)
    painting = true;
}

function onMouseUp(event){
    stopPainting()
}

if(canvas){
    canvas.addEventListener('mousemove',  onMouseMove)
    canvas.addEventListener('mousedown', startPainting)
    canvas.addEventListener('mouseup', stopPainting)
    canvas.addEventListener('mouseleave', stopPainting)
}