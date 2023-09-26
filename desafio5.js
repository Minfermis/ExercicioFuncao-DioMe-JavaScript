/*
    5) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1- À vista Débito, recebe 10% de desconto; 
    2- À vista no Dinheiro ou PIX, recebe 15% de desconto; 
    3- Em duas vezes, preço normal de etiqueta sem juros;  
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
*/

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
    
