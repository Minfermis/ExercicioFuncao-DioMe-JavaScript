# Melhoria de Código JavaScript desafio5.js

### Introdução
Nesta exercicio, vamos aprimorar um código JavaScript, tornando-o mais legível e modular. Veremos como introduzir funções para simplificar os cálculos e melhorar o código. O código melhorado é o desafio5.js que está nos meus repósitórios. 

## Problema Inicial

    Código Condição de pagamento:
    1- Débito, recebe 10% de desconto; 
    2- À vista no Dinheiro ou PIX, recebe 15% de desconto; 
    3- Em duas vezes, preço normal de etiqueta sem juros;  
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 

~~~Javascript

/* Váriaveis*/
const preco = 100;
const formaDePagamento = 4;


/* Código para o cálculo */
    if (formaDePagamento === 1) {
     const debito = preco * 0.1;
     const valorFinal = preco - debito;
     console.log('R$: ' + valorFinal.toFixed(2));
    }
    else if (formaDePagamento === 2) {
        const DinheiroPix = preco * 0.15;
        const valorFinal = preco - DinheiroPix;
        console.log('R$: ' + valorFinal.toFixed(2));
    }
    else if (formaDePagamento === 3) {
        console.log('R$: ' + preco.toFixed(2));
    }
    else (formaDePagamento === 4) 
        const parcelado = preco * 0.1;
        const valorFinal = preco + parcelado;
        console.log('R$: ' + valorFinal.toFixed(2));
    
~~~

Começando pelo código original, aqui podemos ver que as operações de desconto e juros são repetidas, o que torna o código difícil de manter e entender.

## Introdução de Funções

~~~Javascript
//Funções com os calculos
function aplicarDesconto1(valor,desconto){
    return (valor - (valor * (desconto/100)));
}
function aplicarJuros(valor,juros){
    return (valor + (valor * (juros/100)));
}
~~~
A primeira melhoria que introduzimos foi a criação de funções, como `aplicarDesconto1` e `aplicarJuros`, para encapsular as operações de desconto e juros. Isso torna o código mais limpo e reutilizável.

## Simplificação das Condições

~~~Javascript
/* Váriaveis*/
const preco = 100;
const formaDePagamento = 3;


//Condições
    if (formaDePagamento === 1) {
     console.log('R$: ' + aplicarDesconto1(preco,10).toFixed(2));
    }
    else if (formaDePagamento === 2) {
        console.log('R$: ' + aplicarDesconto1(preco,15).toFixed(2));
    }
    else if (formaDePagamento === 3) {
        console.log('R$: ' + preco.toFixed(2));
    }
    else {
        console.log('R$: ' + aplicarJuros(preco,10).toFixed(2));
    }
~~~ 

As condições no código foram simplificadas, e agora elas utilizam as funções designadas para calcular descontos e juros. Isso torna o código mais claro e elimina a necessidade de repetir as operações de cálculo.

Destaque dos benefícios da refatoração, incluindo legibilidade, reutilização e flexibilidade.

Para concluir, vimos como a introdução de funções e a simplificação das condições podem transformar um código JavaScript, tornando-o mais eficiente e sustentável a longo prazo.
