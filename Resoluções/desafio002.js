// somar a distância total percorrida pelo entregador

let listaEntregas = [2, 1.5, 4]

function calcularDistanciaTotal(){
    let distanciaTotal = 0

    listaEntregas.map(function (entrega){
        // distanciaTotal = distanciaTotal + entrega
        distanciaTotal += entrega
    })

    return distanciaTotal
}

let resultadoDistancia = calcularDistanciaTotal(listaEntregas)
console.log(resultadoDistancia)