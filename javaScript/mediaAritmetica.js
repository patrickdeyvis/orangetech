let nota1 = 7
let nota2 = 7
let nota3 = 8
let mediaAr = (nota1 + nota2 + nota3) / 3;

if (mediaAr < 5) {
    console.log('reprovação');
} else if (mediaAr >= 5 && mediaAr <= 7) {
    console.log('recuperação');
} else {
    console.log('passou de semestre');
}
