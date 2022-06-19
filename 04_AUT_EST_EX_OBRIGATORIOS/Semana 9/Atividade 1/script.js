function calcular(){ //Função para descobrir se o dígito da centena é ímpar ou par
    var numero = document.getElementById("numeroInteiro").value; //Número inserido pelo usuário
    var arr = numero.split(''); //Transformamos esse valor em uma lista
    var centena = Number(arr[0]); //Váriavel do dígito da centena
    if(centena%2==0){ //Se o resto da divisão por 2 dá 0 então é par
        alert("O dígito da centena é par")
    }else{ //Se não, é ímpar
        alert("O dígito da centena é ímpar")
    }
}