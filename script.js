//topdown shooter

//setup canvas and graphics conxext
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;


//global variables
let player = {
    x: 200,
    y: 200,
    move: 50,
}
let nvar = 0,x=50,y=50,d=45,ml=false,mr=false,mu=false;
//main program loop (60 fps)
requestAnimationFrame(loop);
function loop () {

    ctx.fillStyle = "white";
    ctx.fillRect(0,0,cnv.width,cnv.height);

    Math.sqrt(Math.pow(player.x, 2) + Math.pow(player.y, 2));

    player.y+=nvar

    ctx.lineWidth = 10;
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(player.x, player.y); //set draw location
    ctx.lineTo(player.x+player.move, player.y+player.move); // draw from current to 700, 150
    ctx.lineTo(player.x+player.move*2, player.y);
    ctx.arc(player.x,player.y,100,0,360)
    ctx.stroke(); //draw seps path

    if(ml){
player.move++
            d += .2
    }if(mr){
player.move--
            d -= .2
    }if(mu && x+25<cnv.width && x-25>0 && y+25<cnv.height && y-25>0){
        y = y+Math.cos(d)*5;
x = x+Math.sin(d)*5;
    } else if (x+25>cnv.width){
        x=cnv.width-26
    } else if (x-25<0){
        x = 26
    } else if (y+25>cnv.height){
        y = cnv.height-26
    } else if (y-25<0){
        y = 26
    }
    
    

    ctx.beginPath()
    ctx.arc(x,y,25,0,360)
    ctx.moveTo(x,y)
    ctx.lineTo( x+Math.sin(d)*25,y+Math.cos(d)*25)
    ctx.stroke()
    
    requestAnimationFrame(loop);
}

// document event stuff
document.addEventListener("keydown", keydo);
document.addEventListener("keyup", keyup);


function keydo(event){
    
    //STEP MOVEMENT
    
        //step movement
        if (event.code == "ArrowRight" ) {
            mr = true
            
        } if (event.code == "ArrowLeft"  ) {
            ml = true
            
        } if (event.code == "ArrowUp" ) {
            //nvar++
            mu = true
        } 
    

    
}
function keyup(event){
    
    //STEP MOVEMENT
    
        //step movement
        if (event.code == "ArrowRight" ) {
            mr = false
            
        } if (event.code == "ArrowLeft"  ) {
            ml = false
            
        } if (event.code == "ArrowUp" ) {
            //nvar++
            mu = false
        } 
    

    
}






