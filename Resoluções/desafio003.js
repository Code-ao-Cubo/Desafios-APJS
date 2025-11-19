// separar os itens vencidos
let listaItens = [
    {
        nome: "Arroz",
        vencimento: "2025-08-25"
    },
    {
        nome: "Feijão",
        vencimento: "2025-11-25"
    },
    {
        nome: "Macarrão",
        vencimento: "2025-12-25"
    },
    {
        nome: "Farinha",
        vencimento: "2025-07-25"
    }
]

function listarItensVencidos(itens){
    let itensVencidos = [] // lista com os nomes dos itens vencidos
    let dataAtual = new Date()

    itens.map(function (x) {

        let dataVencimento = new Date(x.vencimento)

        if(dataAtual > dataVencimento){
            itensVencidos.push(x.nome)
        }
    })

    return itensVencidos
}

let listaFinal = listarItensVencidos(listaItens)
console.log(listaFinal)