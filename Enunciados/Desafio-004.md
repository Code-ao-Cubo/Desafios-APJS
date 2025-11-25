# Desafio 4 — Gerenciador de Passageiros do Ônibus

Crie uma aplicação web simples usando HTML + JavaScript que permita cadastrar um ônibus, controlar seus assentos e listar os passageiros embarcados. O objetivo é simular o gerenciamento visual de ocupação de um ônibus em tempo real.

## 🎯 Funcionalidades do Projeto
### 1. Cadastro do Ônibus
O usuário informa a capacidade total de assentos.
O sistema cria automaticamente uma lista interna representando todos os assentos, inicialmente vazios.

### 2. Contador Visual de Ocupação

Uma barra de progresso mostra quantos assentos já estão ocupados.
Abaixo da barra, o sistema exibe o número de vagas livres restantes.

### 3. Cadastro de Passageiros

O usuário informa:
- Nome do passageiro
- Número do assento desejado

O sistema deve validar:

- Se o assento existe.
- Se está livre.
- Se tudo estiver certo, o passageiro é cadastrado e o assento passa a ser marcado como ocupado.

### 4. Lista de Passageiros

Exibe uma tabela com todos os passageiros embarcados, contendo:
- Nome
- Número do assento

## Exemplo de Uso

Capacidade cadastrada: 10 assentos
-> Passageiro cadastrado:
Nome: João
Assento: 3

-> Resultado:
- Barra mostra 1 assento ocupado
- Vagas livres: 9
- Tabela mostra: João — Assento 3
