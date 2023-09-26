/*
     Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento separando em funções. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1- À vista Débito, recebe 10% de desconto; 
    2- À vista no Dinheiro ou PIX, recebe 15% de desconto; 
    3- Em duas vezes, preço normal de etiqueta sem juros;  
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
*/

//Funções com os calculos
function aplicarDesconto1(valor,desconto){
    return (valor - (valor * (desconto/100)));
}
function aplicarJuros(valor,juros){
    return (valor + (valor * (juros/100)));
}

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