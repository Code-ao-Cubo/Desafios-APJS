// a cada 3 garrafas -> 1 grátis

function calcularGarrafasGratis(numGarrafas){
    return Math.floor(numGarrafas / 3)
}

let numGarrafasDevolvidas = 8
let numGarrafasGratis = calcularGarrafasGratis(numGarrafasDevolvidas)

// console.log("O número de garrafas grátis é: " + numGarrafasGratis)
console.log(numGarrafasGratis)