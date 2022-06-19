function calcular(){ //Função para calcular a soma total dos dígitos de um número
    var valor = document.getElementById("valor").value; //Número inserido pelo usuário
    var arr = valor.split(''); //Transformamos esse valor em uma lista
    var total = 0; //Váriavel da soma
    for(var i=0; i<arr.length; i++){ //For é utilizado para percorrer todos os valores da lista arr
        total += Number(arr[i]); //Soma dos dígitos
    }
    alert("A soma dos dígitos do número " +valor+ " é: " +total);
}