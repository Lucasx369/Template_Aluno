function calcular(){
    var preco = Number(document.getElementById("preco").value);
    var valor = new Array(0,0,0,0,0,0,0);
    var notas = new Array(100,50,20,10,5,2,1);

    while(preco !== 0){
        if(preco >= 100){
            preco = preco - 100
            valor[0] += 1 
        }
        else if(preco >= 50){
            preco = preco - 50
            valor[1] += 1 
        }
        else if(preco >= 20){
            preco = preco - 20
            valor[2] += 1 
        }
        else if(preco >= 10){
            preco = preco - 10
            valor[3] += 1 
        }
        else if(preco >= 5){
            preco = preco - 5
            valor[4] += 1 
        }
        else if(preco >= 2){
            preco = preco - 2
            valor[5] += 1 
        }
        else if(preco >= 1){
            preco = preco - 1
            valor[6] += 1 
        }

    }
    for (var i = 0; i < 6; i++) {       
        if(valor[i] != 0){
            //alert(notas[i] + "=" + valor[i])
            document.write(notas[i] + " reais = " + valor[i] + " nota(s) <br>")
        }
    }
}