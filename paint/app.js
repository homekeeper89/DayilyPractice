const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange")
const mode = document.getElementById("jsMode")
const saveBtn = document.getElementById("jsSave")
const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white"
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE)

ctx.strokeStyle=INITIAL_COLOR; // 컨버스에 그리는 색상
ctx.fillStyle =INITIAL_COLOR
ctx.lineWidth=2.5;
// ctx.fillStyle="green";
// ctx.fillRect(50, 20, 100, 40);

function startPainting(){
    painting = true
}

let painting = false;
let filling = false;

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
    ctx.strokeStyle = color
    ctx.fillStyle=ctx.strokeStyle
}

function handleRangeChange(event){
  ctx.lineWidth = event.target.value
}

function handleModeClick(){
  if(filling == true){
    filling = false;
    mode.innerText = "Fill"
  }else{
    filling = true;
    mode.innerText = "Paint"
    
  }
}
function handleCanvasClick(){
  if(filling){
    ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE)
  }
}

function handleCM(event){
  event.preventDefault()
  console.log(event)
}

function handleSaveClick(){
  const image = canvas.toDataURL("image/jpeg")
  console.log(image)
  const link = document.createElement("a")
  link.href = image
  link.download = "hello"; // a href 대신 a download를 쓸수있음, download는 이름을 가져야함
  console.log(link)
  link.click()
}
if(canvas){
    canvas.addEventListener('mousemove',  onMouseMove)
    canvas.addEventListener('mousedown', startPainting)
    canvas.addEventListener('mouseup', stopPainting)
    canvas.addEventListener('mouseleave', stopPainting)
    canvas.addEventListener('click', handleCanvasClick)
    canvas.addEventListener('contextmenu', handleCM)
}

console.log(Array.from(colors)); // Array.from은 list를 만든다

if(colors){
    Array.from(colors).forEach(
        color => color.addEventListener("click", handleColorClick))
}

if(range){
  range.addEventListener("input", handleRangeChange)
}

if(mode){
  mode.addEventListener("click", handleModeClick)
}

if(saveBtn){
  saveBtn.addEventListener("click", handleSaveClick)
}