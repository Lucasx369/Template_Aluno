function trocar(){
    var texto1 = document.getElementById("texto1").value; //A variável texto1 recebe o valor do primeiro campo
    var texto2 = document.getElementById("texto2").value; //A variável texto2 recebe o valor do segundo campo
    document.getElementById("texto1").value = texto2 //O primeiro campo recebe o valor do segundo campo
    document.getElementById("texto2").value = texto1 //O segundo campo recebe o valor do primeiro campo
}

