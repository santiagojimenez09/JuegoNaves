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

    //Funcion para colocar los aliens en el tablero
    //Forma con for
    /*for(let i = 0; i <aliens.length; i++){
        cuadrosTablero[aliens[i]].classList.add("aliens")
    }*/
    //Forma con forEach
    function ubicarAliens(){
        aliens.forEach(alien => cuadrosTablero[posicionAliens + alien].classList.add("aliens"));
        }
    ubicarAliens();

    //Funcion para quitar los aliens en el tablero
    function quitarAliens(){
        aliens.forEach(alien => cuadrosTablero[posicionAliens + alien].classList.remove("aliens"));
    }

    //Colocar la nave en posicion inicial
    cuadrosTablero[posicionNave].classList.add("nave");

    //Funcion para mover la nave
    function moverNave(e){
        //quitar la nave en el tablero
        cuadrosTablero[posicionNave].classList.remove("nave");
        //mover la nave dependiendo de la tecla que oprima
        switch(e.key){
            case 'ArrowLeft':
                if((posicionNave % cuadros) !== 0){
                    posicionNave -=1;
                }
            break;
            case 'ArrowRight':
                if((posicionNave % cuadros) < cuadros -1){
                    posicionNave +=1;
                }
            break;
           
        }
        cuadrosTablero[posicionNave].classList.add("nave");
    
    }
    //activar el evento del teclado
    document.addEventListener('keydown',moverNave);
    


});