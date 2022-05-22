function calcular(){
    var valor1 = Number(document.getElementById("valor1").value);
    var valor2 = Number(document.getElementById("valor2").value);
    var resultado = 0;
    var select = document.getElementById("operacao");
	var operacao = select.options[select.selectedIndex].value;

    switch(operacao){
        case "somar":
            resultado = valor1 + valor2;
            break;
        case "subtrair":
            var resultado = valor1 - valor2;
            break;
        case "multiplicar":
            var resultado = valor1 * valor2;
            break;
        case "dividir":
            var resultado = valor1 / valor2;
            break;
        case "potencia":
            var resultado = valor1 ** valor2;
            break;
        case "modulo":
            var resultado = valor1 % valor2;
            break;
    }
    //document.getElementById('resultado').innerHTML += "<h1>" + resultado + "</h1>";
    document.write(resultado)
}