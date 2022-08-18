function dibujarLinea(color,inx,iny,fix,fiy,lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(inx,iny);
    lienzo.lineTo(fix,fiy);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento){
    var colorin = "green";
    var movimiento = 10;

    switch(evento.keyCode){

        case teclas.UP:
            dibujarLinea(colorin,x,y,x,y - movimiento,papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorin,x,y,x,y + movimiento,papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorin,x,y,x - movimiento,y,papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorin,x,y,x + movimiento,y,papel);
            x = x + movimiento;
        break;
        default:
            console.log("Otra tecla");
    }

}

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39

};

var x = 150;
var y = 150;


var lienzo = document.getElementById("lienzo");
var papel = lienzo.getContext("2d");
dibujarLinea("red",x-1,y-1,x,y,papel);
var eventoTecla = document.addEventListener("keyup",dibujarTeclado);

