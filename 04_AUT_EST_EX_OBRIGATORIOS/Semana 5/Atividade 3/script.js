
var palavra = document.getElementById("palavra");
var valor = new Array();
var valorFoco = document.getElementById("valorFoco");
var arr = palavra.split('');
console.log(arr);
bubbleSort(arr);

for(var i = 0; i < palavra.length; i++){
    valor[i] = i + 1 
}
console.log(valor);


function bubbleSort(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(items[j] > items[j+1]) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
}
alert("ola")
for(var i = 0; i < palavra.length; i++){
    if(i + 1 == valorFoco){
        //console.log(valor[i]+ "°" + arr[i] + " VALOR FOCO")   
        document.write(valor[i]+ "°" + arr[i] + " VALOR FOCO")
    }else{
        //console.log(valor[i]+ "°" + arr[i])
        document.write(valor[i]+ "°" + arr[i])
    }
}
