var doc = document.getElementById("dibujoCanva");
var boton = document.getElementById("button");
var text = document.getElementById("texto");
var lienzo = doc.getContext("2d");
var l;
var lineas = 30;
var yi, xf;

function dibujarLinea(color,inx,iny,fix,fiy){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(inx,iny);
    lienzo.lineTo(fix,fiy);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    for(l=0;l<lineas;l++){
        yi= 10 * l;
        xf= 10 *(l+1);
        dibujarLinea("pink",0,yi,xf,300);
    }    
    alert(text.value);
}

boton.addEventListener("click", dibujoPorClick);




