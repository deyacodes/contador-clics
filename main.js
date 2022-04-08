const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reiniciar= document.getElementById("reset");

let cantidad = 0;

sumar.addEventListener("click", ()=> {
    cantidad++;
    contador.innerHTML = cantidad;
});

restar.addEventListener("click", ()=> {
    if (cantidad == 0){}
    else{
        cantidad--;
        contador.innerHTML = cantidad;
    }
});

reiniciar.addEventListener("click", ()=> {
    cantidad = 0;
    contador.innerHTML = cantidad;
});

