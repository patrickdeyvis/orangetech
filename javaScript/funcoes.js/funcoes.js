
function calImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classImc(IMC) {
    if (IMC < 18.5) {
        return 'Abaixo do peso';
    } else if (IMC >= 18.5 && IMC <= 25) {
        return 'Peso normal';
    } else if (IMC >= 25 && IMC <= 30) {
        return 'Acima do peso';
    } else if (IMC >= 30 && IMC <= 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

function main() {
    let peso = 80;
    let altura = 1.75;
    let IMC = calImc(peso, altura);
    console.log(classImc(IMC));

}
main();
