document.addEventListener("DOMContentLoaded",()=>{
    const cuadrosTablero = document.querySelectorAll(".tablero div");
    const resultadoAliens = document.querySelectorAll(".conteo");
    let cuadros = 15;
    let posicionNave = 202;
    let posicionAliens= 0;
    let aliensMuertos = [];
    let resultado = 0;
    let direccion = 1;
    let alienID;

    //Posicion inicial de los aliens en el tablero
    let aliens = [
        3,4,5,6,7,8,9,10,11,12,
        18,19,20,21,22,23,24,25,26,27,
        33,34,35,36,37,38,39,40,41,42
    ];

    //Colocar los aliens en el tablero
    aliens.forEach(alien => cuadrosTablero[posicionAliens + alien].classList.add("aliens"));
    //Colocar la nave en posicion inicial
    cuadrosTablero[posicionNave].classList.add("nave");
});