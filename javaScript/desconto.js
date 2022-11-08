const preco = 100;
let formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(preco - (preco * 0.10));
} else if (formaPagamento === 2) {
    console.log(preco - (preco * 0.15));
} else if (formaPagamento === 3) {
    console.log(preco);
} else {
    console.log(preco + (preco * 0.10));
}
