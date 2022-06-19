function calcular(){ //Função para ordenar nomes
    var nome1 = document.getElementById("nome1").value; //Variável do primeiro nome
    var nome2 = document.getElementById("nome2").value; //Variável do segundo nome
    var nome3 = document.getElementById("nome3").value; //Variável do terceiro nome
    var nomes = []; //Lista para os nomes
    nomes.push(nome1, nome2, nome3); //Adicionamos os todos os nomes na lista
    var ordem = nomes.sort(); //Método para ordenar os elementos da lista em ordem alfabética
    alert("Os três nomes em ordem alfabética é: " + ordem);
}