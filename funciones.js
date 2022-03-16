document.addEventListener("DOMContentLoaded",()=>{
    const cuadrosTablero = document.querySelectorAll(".tablero div");
    const resultadoAliens = document.querySelectorAll(".conteo");
    let cuadros = 15;
    let posicionNave = 202;
    let posicionAliens= 0;
    let aliensMuertos = [];
    let iraDerecha = true;
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
    function ubicarAliens(){
    for(let i = 0; i <aliens.length; i++){
        if(!aliensMuertos.includes(i)){
            cuadrosTablero[aliens[i]].classList.add("aliens");
        }
    }
    //Forma con forEach
    /*function ubicarAliens(){
        aliens.forEach(alien => cuadrosTablero[posicionAliens + alien].classList.add("aliens"));
        }*/
    }ubicarAliens();

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

    //mover los aliens
    function moverAliens(){
        //limite de los aliens
        const limiteIzquierdo = (aliens[0] % cuadros) === 0;
        const limiteDerecho = (aliens[aliens.length -1] % cuadros) === cuadros-1;
        quitarAliens();
        //mover cuadros a la derecha
        if(limiteDerecho && iraDerecha){
            for(let i=0; i<aliens.length; i++){
                aliens[i] += cuadros +1;
                direccion = -1;
                iraDerecha = false;
            }
        }
        //mover cuadros a la izquierda
        if(limiteIzquierdo && !iraDerecha){
            for (let i= 0; i<aliens.length; i++) {
                aliens[i] += cuadros -1;
                direccion = 1;
                iraDerecha = true;
                
            }
        }
        
        for(let i=0; i<aliens.length; i++){
            aliens[i] += direccion;

        }
        ubicarAliens();
        
        //juego terminado
        if(cuadrosTablero[posicionNave].classList.contains("aliens")){
            alert("PERDISTE");
            location.reload();
        }
    
    
    }
    moverAliens();
    alienID = setInterval(moverAliens, 500);

    function disparar(e){
        let balaID;
        let posicionBala = posicionNave;
        //mover la bala
        function moverBala(){
            cuadrosTablero[posicionBala].classList.remove("balas");
            posicionBala -= cuadros;
            cuadrosTablero[posicionBala].classList.add("balas");
            //matar aliens
            if(cuadrosTablero[posicionBala].classList.contains("aliens")){
                cuadrosTablero[posicionAliens].classList.remove("aliens");
                cuadrosTablero[posicionBala].classList.remove("balas");
                cuadrosTablero[posicionBala].classList.add("explosion");
                //tiempo de explosion
                setTimeout(()=>cuadrosTablero[posicionBala].classList.remove("explosion"),300);
                clearInterval(balaID);
                //buscar la posicion del alien eliminado y guardarlo en el array aliensMuertos
                const aliensEliminados = aliens.indexOf(posicionBala);
                aliensMuertos.push(aliensEliminados);
                resultado++;
                resultadoAliens.innerHTML = aliensMuertos.length;
            }

        }
        switch(e.key){
            case "ArrowUp" :
                balaID = setInterval(moverBala, 100);
                
            break;
        }

    }
    
    document.addEventListener("keydown", disparar);

    


});