//1)
let jugadores= [ "Messi","Ronaldo", "Maradona","Neymar","Julian"];
console.log(jugadores);
//2)
let puntajes=[];
for (let i = 0; i < jugadores.length; i++) {

    let puntajes=Number(prompt("Ingresa un puntaje"))
    console.log(puntajes  +   jugadores [i])
    
}



//1)
let Jugadores = ["Lucia","Lopez","Caesar","Jose","Javier"]

//2)
for (let i = 1; i <= 5; i++) {
    let nombre = prompt(`Introduce el nombre del jugador ${i}:`);
    let puntaje = parseInt(prompt(`Introduce el puntaje de ${nombre}:`), 10);
}

let Puntajes = []
jugadores.push({ nombre: nombre, puntaje: puntaje });

//3)

let PuntajeMayor = Puntajes[0]
let jugadormayor = jugadores[0]
for (let indice = 0; indice< Puntajes.length; indice = indice + 1) {
    if(Puntajes[indice] > Cantidad){
        Cantidad = Puntajes[indice]
    }
    
}
//4)
console.log("El puntaje mas bajo fue" + Cantidad)
//5)
Jugadores.push(prompt("Ingrese nombre de jugador"))
Puntajes.push(prompt("Ingrese puntaje de Jugador"))
//6)
console.log(`Cantidad de puntajes guardados: {jugadores.length}`);
//7)




