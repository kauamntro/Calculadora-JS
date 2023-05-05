function colocarAlgo(num) {
    const numero = document.getElementById('resultado').innerHTML;
    if(numero.length >= 9) {
        return
    }
    if(numero.length == 8) {
    document.getElementById('resultado').innerHTML = numero + "...";
    return
    } else {
    document.getElementById('resultado').innerHTML = numero + num;
    return
    }
}

function limparDisplay() {
    document.getElementById('resultado').innerHTML = "";
}

function calcular() {
    const resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('conta').innerHTML = resultado;
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Coloca algo!";
    }
}

function retirarUltimo() {
    const resultado = document.getElementById('resultado').innerHTML;
    const numero = resultado.substring(1);
    document.getElementById('resultado').innerHTML = numero;
    document.getElementById('conta').innerHTML = resultado;
}