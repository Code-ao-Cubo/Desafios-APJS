# Desafio 3 — Filtrando Produtos Vencidos

Um supermercado mantém uma lista de produtos, cada um com sua data de validade.  
Dada a lista de datas e a data atual, **retorne apenas os itens vencidos**.

## Entrada
- Uma lista de datas no formato `YYYY-MM-DD`
- Uma data atual no mesmo formato

## Saída
- Lista contendo somente as datas menores que a data atual.

## Exemplo
Entrada:
["2024-01-10", "2024-03-05", "2023-12-20"]
2024-01-01

Saída:
["2023-12-20"]