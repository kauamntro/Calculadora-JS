

// Declaração dos botões com funções diferente de *Number*


function colocarAlgo(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limparDisplay() {
    document.getElementById('resultado').innerHTML = "";
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Coloca algo!";
    }
}