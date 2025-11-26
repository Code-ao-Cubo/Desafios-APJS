let numPassageiros = 0
let listaAssentos = []
let contadorPassageiros = 0

document.getElementById("formViagem").addEventListener("submit", function (evento) {
    evento.preventDefault()
    criarViagem()
})


function criarViagem() {
    let inputPassageiros = document.getElementById("numPassageiros").value

    if (inputPassageiros <= 0) {
        return alert("O número de passageiros precisa ser mair que 0.")
    }

    numPassageiros = Number(inputPassageiros)

    document.getElementById("tituloNumAssentos").innerText = "Nº de assentos livres: " + numPassageiros

    // for(let i = 0; i < numPassageiros; i++){
    //     listaAssentos.push(null)
    // }
    // preencher a lista com todos os assentos livres (null)
    listaAssentos = Array(numPassageiros).fill(null)
    
    // zerar o input
    document.getElementById("numPassageiros").value = null
}

document.getElementById("formPassageiro").addEventListener("submit", function (evento){
    evento.preventDefault()
    adicionarPassageiro()
})

function adicionarPassageiro(){
    let nomePassageiro = document.getElementById("nome").value
    let numAssento = document.getElementById("numAssento").value

    if(!nomePassageiro || !numAssento){
        return alert("O nome e o nº do assento são obrigatórios!")
    }

    numAssento = Number(numAssento)

    if(numAssento > listaAssentos.length || numAssento <= 0){
        return alert("Assento inválido!")
    }

    contadorPassageiros++;
    listaAssentos[numAssento - 1] = nomePassageiro
    document.getElementById("tituloNumAssentos").innerText = "Nº de assentos livres: " + Number(numPassageiros - contadorPassageiros)

    // limpar os inputs 
    document.getElementById("nome").value = null
     document.getElementById("numAssento").value = null
}