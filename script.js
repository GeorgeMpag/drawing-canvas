const canvas=document.getElementById('canvas')
const ctx=canvas.getContext('2d')

let size=10
let color = "black"
let flowerPressed=false

//--------Get the color ------------------------------
var theInput = document.getElementById("color");

theInput.addEventListener("input", function(){
  var inputColor = theInput.value;
  color=inputColor
} );

let isPressed=false
let mouseX=undefined
let mouseY=undefined

//--------- Mouse actions --------------------------------
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
        //---------Draw the sapes
        if(!flowerPressed){ 
            drawCircle(x2,y2)
            drawLine(mouseX,mouseY,x2,y2)
        }else{
            for (let i=0; i<3;i++){
                const root= new Root(mouseX, mouseY)    
                root.update()
            }
           
        }
     

        mouseX=x2
        mouseY=y2
    }
})

class Root{
    constructor(x,y){
        this.x=x
        this.y=y
        this.speedX=Math.random()*4-2
        this.speedY=Math.random()*4-2
        this.maxSize=Math.random()*7+5
        this.size=Math.random()*.1+2
        this.angleX=Math.random()*6.2
        this.angleY=Math.random()*6.2
        this.sizeIcreaser=Math.random()*.2+.2
        this.angleXIcreaser=Math.random()*.2-.2
        this.angleYIcreaser=Math.random()*.2-.2
    }

    update(){
       
            this.x+=this.speedX+Math.sin(this.angleX)
            this.y+=this.speedY+Math.sin(this.angleY)
            this.size+=this.sizeIcreaser
            this.angleX+=this.angleXIcreaser
            this.angleY+=this.angleYIcreaser
            ctx.lineWidth = 1;
            if (this.size<this.maxSize){
                ctx.beginPath()
                ctx.arc(this.x,this.y, this.size,0,Math.PI*2)
                ctx.fillStyle="lightgreen"
                ctx.fill()
                ctx.stroke()
                requestAnimationFrame(this.update.bind(this))
            }
        
    }
}


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


//---------------Button functions---------------------------------------- 

function decSize(){
    let currSize=document.getElementById("size").innerHTML;
    if (currSize>5)
        currSize-=5

    document.getElementById("size").innerHTML=currSize    
    size=currSize
}


function incSize(){
    let currSize=document.getElementById("size").innerHTML;
    c=parseInt(currSize)
    if (c<50)
        c+=5
    document.getElementById("size").innerHTML=c    
    size=c
    
}

function clearScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function flowers(){
    if (!flowerPressed){
        flowerPressed=true
        document.getElementById("flowers").style.background="lightgrey"
    }else{
        flowerPressed=false
        document.getElementById("flowers").style.background="white"
    }

}