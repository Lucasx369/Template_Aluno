function calcular(){ //Função para descobrir quais números primos há em um intervalo
    var valor1 = Number(document.getElementById("valor1").value); //Valor no qual se inicia o intervalo
    var valor2 = Number(document.getElementById("valor2").value); //Valor no qual se encerra o intervalo
    var primos = []; //Lista dos números primos do intervalo
    for(var i=valor1; i<=valor2; i++){ //Esse for percorre todos os valores do intervalo
        var divisores=0; //Número de divisores de um determinado número
        for(var num=1 ; num<=i ; num++){
            if(i % num == 0){ //Aqui confere-se se quais valores são divisores de i
                divisores++; //Adicionar 1 se encontrar um divisor
            }    
        }    
       if(divisores==2){ //Se o número possuir apenas 2 divisores então é um primos
           primos.push(i); //Número é adicionado a lista de primos
       }
    }
    alert("Os números primos no intervalo ["+valor1+","+valor2+"] são: "+primos);
}


