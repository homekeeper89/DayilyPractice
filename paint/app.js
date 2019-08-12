const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor")

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle="#2c2c2c"; // 컨버스에 그리는 색상
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
function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    console.log(color)
    ctx.strokeStyle = color
}

if(canvas){
    canvas.addEventListener('mousemove',  onMouseMove)
    canvas.addEventListener('mousedown', startPainting)
    canvas.addEventListener('mouseup', stopPainting)
    canvas.addEventListener('mouseleave', stopPainting)
}

console.log(Array.from(colors)); // Array.from은 list를 만든다

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))