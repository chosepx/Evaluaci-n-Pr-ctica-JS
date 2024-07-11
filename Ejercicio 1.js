
let rNum;

for (let i = 0; i < 5; i++) {
    rNum = Math.floor(Math.random()*100) //se genera numero aleatorio 

    if(rNum%2 === 0){  // si el resto es 0 es par
        console.log("Iteración "+ (i+1)+": Numero generado: = "+rNum + " es par")
    }else{
        console.log("Iteración "+ (i+1)+": Numero generado: = "+rNum + " es impar")
    }

  }