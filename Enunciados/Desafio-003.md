# Desafio 3 — Filtrando Produtos Vencidos

Um supermercado mantém uma lista de produtos, cada um com sua data de validade.  
Dada a lista de produtos e a data atual, **retorne apenas os itens vencidos**.

## Entrada
- Uma lista de itens no formato
  - nome -> string
  - vencimento -> Date - `YYYY-MM-DD`
- Uma data atual no mesmo formato

## Saída
- Lista contendo somente os produtos com vencimento menor que a data atual.

## Exemplo
Entrada:
```javascript
[
    {
        nome: "Arroz",
        vencimento: "2025-08-25"
    },
    {
        nome: "Feijão",
        vencimento: "2025-11-25"
    }
]
```

Saída:
```javascript
["Arroz"]
```

