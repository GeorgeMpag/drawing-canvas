const canvas=document.getElementById('canvas')
const ctx=canvas.getContext('2d')

let size=10
let color = 'black'
let isPressed=false
let mouseX=undefined
let mouseY=undefined


canvas.addEventListener('mousedown', (event)=>{
    isPressed=true;

    mouseX=event.offsetX
    mouseY=event.offsetY
})

canvas.addEventListener('mouseup', (event)=>{
    isPressed=false;

    mouseX=undefined
    mouseY=undefined
})


canvas.addEventListener('mousemove', (event)=>{
    if (isPressed){
        let x2=event.offsetX
        let y2=event.offsetY

        drawCircle(x2,y2)
        drawLine(mouseX,mouseY,x2,y2)

        mouseX=x2
        mouseY=y2
    }
})


function drawCircle(x,y){

    ctx.beginPath()
    ctx.arc(x,y,size,0, Math.PI*2,true)
    ctx.fillStyle=color
    ctx.fill();
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)

    ctx.strokeStyle=color
    ctx.lineWidth=size*2
    ctx.stroke();
}


