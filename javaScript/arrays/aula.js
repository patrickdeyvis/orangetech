const lista = ['queijo', 'ovo', 'carne'];
var listaAlimentos = ['arroz', 'carne', 'ovo', 'óleo', 'queijo', 'macarrão'];
var lpereciveis = [];
for (let i = 0; i < listaAlimentos.length; i++) {
    for (j = 0; j < lista.length; j++) {
        if (listaAlimentos[i] === lista[j]) {
            lpereciveis.push(listaAlimentos[i])
        }
    }
console.log(lpereciveis)
}
