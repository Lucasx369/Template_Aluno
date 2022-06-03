var qtdAlunos = 0; //Variável de quantidade de alunos
var prova = []; //Lista que contém as notas da prova de todos os alunos
var provaTotal = 0; //Soma de todas as notas de provas
var somaProva = 0; //Soma total das notas de prova
var trabalho = []; //Lista que contém as notas dos trabalhos de todos os alunos
var somaTrabalho = 0; //Soma total das notas de trabalho
var trabalhoTotal = 0; //Soma de todas as notas de trabalho 
var somaMediaGeral = 0 //Soma das médias dos alunos
var mediaGeral = 0 //Média geral dos alunos
var mediaAluno = [] //Lista que contém a média de todos os alunos

function notas(){ //Função notas
    qtdAlunos = document.getElementById('qtdAlunos').value; //Valor dado a váriavel quantidade de alunos

    //Através do for abaixo, se cria inputs para receber as notas dos alunos, conforme a quantidade total
    for(let i=0; i<qtdAlunos; i++){
        document.querySelector("#aluno").innerHTML += "<h6>"+ "Qual a nota do Aluno "+ (i+1) + " na prova:" +"</h6>";
        document.querySelector("#aluno").innerHTML += `<input type="number" id="notaProva${i}" name="qtdPessoas">`;
        document.querySelector("#aluno").innerHTML += "<h6>"+ "Qual a nota do Aluno "+ (i+1) + " no trabalho:" +"</h6>";
        document.querySelector("#aluno").innerHTML += `<input type='number' id='notaTrabalho${i}' name='qtdPessoas'>`;
    }
    //Botao que chama a função calcular, para realizar as operações
    document.querySelector("#aluno").innerHTML += "<br> <input id='botao' type='submit' onclick='calcular()' value='Calcular'>"
}

function calcular(){
    //Através do for abaixo, se adiciona as notas de prova e trabalho, nas suas respectivas listas
    for(let i=0; i<qtdAlunos; i++){
        prova.push(Number(document.getElementById("notaProva"+i).value));
        trabalho.push(Number(document.getElementById("notaTrabalho"+i).value));
    }

    //Através do for abaixo é realizada a soma de todas as notas contidas na lista prova e trabalho
    for(let i=0; i<qtdAlunos; i++){
        somaProva += prova[i];
        console.log(prova[i])
        somaTrabalho += trabalho[i]; 
        console.log(trabalho[i])
    }

    //Através do for abaixo é calculado média de cada aluno
    for(let i=0; i<qtdAlunos; i++){
        mediaAluno.push(((prova[i]*2)+(trabalho[i]*3))/5); //Média de cada aluno na lista
        somaMediaGeral += mediaAluno[i]; //Soma das média
    }

    //Através do for abaixo, as médias dos alunos são mostradas no html
    for(let i=0; i<qtdAlunos; i++){
        document.querySelector("#aluno").innerHTML += `<h6>Média do Aluno ${i+1}: ${mediaAluno[i]}</h6>`; //Média de cada aluno
    }

    mediaGeral = somaMediaGeral/qtdAlunos; //Calcula da média geral dos alunos
    document.querySelector("#aluno").innerHTML += `<h6>Média Geral: ${mediaGeral}</h6>`; //Média geral apresentada no html, considerando todos os alunos

    provaTotal = somaProva/qtdAlunos; //Calculo da média aritmética das notas da prova
    document.querySelector("#aluno").innerHTML += `<h6>Média Aritmética das provas: ${provaTotal}</h6>`; //Média artimética das notas de prova apresentada no html

    trabalhoTotal = somaTrabalho/qtdAlunos; //Calculo da média aritmética das notas de trabalho
    document.querySelector("#aluno").innerHTML += `<h6>Média Aritmética dos trabalhos: ${trabalhoTotal}</h6>`; //Média artimética das notas de trabalho apresentada no html

    var maiorProva = prova[0]; //Variável que recebe a maior nota de provas, é inicializada com a primeira posição da lista provas
    var menorProva = prova[0]; //Variável que recebe a menor nota de provas, é inicializada com a primeira posição da lista provas
    var maiorTrabalho = trabalho[0]; //Variável que revebe a maior nota de trabalho, é inicializada com a primeira posição da lista trabalho
    var menorTrabalho = trabalho[0]; //Variável que revebe a menor nota de trabalho, é inicializada com a primeira posição da lista trabalho

    for (var i = 0; i < prova.length; i++) {
    if ( prova[i] > maiorProva ) { //Se o valor da posição da lista for maior que o da variável, faça:
        maiorProva = prova[i]; //Variável maiorProva recebe esse valor
    }
    if ( prova[i] < menorProva ) { //Se o valor da posição da lista for menor que o da variável, faça:
        menorProva = prova[i]; //Variável menorProva recebe esse valor
    }
    }

    for (var i = 0; i < trabalho.length; i++) {
    if ( trabalho[i] > maiorTrabalho ) { //Se o valor da posição da lista for maior que o da variável, faça:
        maiorTrabalho = trabalho[i]; //Variável maiorTrabalho recebe esse valor
    }
    if ( trabalho[i] < menorTrabalho ) { //Se o valor da posição da lista for menor que o da variável, faça:
        menorTrabalho = trabalho[i]; //Variável menorProva recebe esse valor
    }
    }

    document.querySelector("#aluno").innerHTML += `<h6>Menor Nota de Prova: ${menorProva} <br> Maior Nota de Prova: ${maiorProva}</h6>`; //Menor e a maior notas de prova são apresentadas no html;
    document.querySelector("#aluno").innerHTML += `<h6>Menor Nota de Trabalho: ${menorTrabalho} <br> Meior Nota de Trabalho: ${maiorTrabalho}</h6>`; //Menor e a maior notas de trabalho são apresentadas no html;
    

//console.log("Maior"+ maiorTrabalho +"Menor"+ menorTrabalho)
//document.querySelector("#aluno").innerHTML += "<br> <input id='botao' type='submit' onclick='ver()' value='Ver Resultado'>"

}
/*
function ver(){
    for(let i=0; i<qtdAlunos; i++){
        document.querySelector("#aluno").innerHTML += `<h6>Média do Aluno ${i+1}: ${mediaAluno[i]}</h6>`; //Média de cada aluno

        //document.querySelector("#aluno").innerHTML += `<table><tr><td>Aluno</td><td>Nota Prova</td><td>Nota Trabalho</td><td>Média Geral</td><td>Média Aritmética Prova</td><td>Média Aritmética Trabalho</td></tr><tr><td>Aluno ${i+1}</td><td>${prova[i]}</td><td>${trabalho[i]}</td><td>${mediaGeral/qtdAlunos}</td><td>${provaTotal/qtdAlunos}</td><td>${trabalhoTotal/qtdAlunos}</td></tr></table>`;
       // document.querySelector("#aluno").innerHTML += `<table><tr><td>Aluno ${i+1}</td><td>${prova[i]}</td><td>${trabalho[i]}</td><td>${mediaGeral/qtdAlunos}</td><td>${provaTotal/qtdAlunos}</td><td>${trabalhoTotal/qtdAlunos}</td></tr></table>`;
    }
    document.querySelector("#aluno").innerHTML += `<h6>Média Geral: ${mediaGeral}</h6>`; //Média geral, considerando todos os alunos
    document.querySelector("#aluno").innerHTML += `<h6>Média Aritmética das provas: ${provaTotal}</h6>`; //Média artiméticas das notas de prova
    document.querySelector("#aluno").innerHTML += `<h6>Média Aritmética dos trabalhos: ${trabalhoTotal}</h6>`; //Média artiméticas das notas de trabalho
    document.querySelector("#aluno").innerHTML += `<h6>Menor Nota de Prova: ${menorProva} <br> Maior Nota de Prova: ${maiorProva}</h6>`; //Menor e a maior notas de prova;
    document.querySelector("#aluno").innerHTML += `<h6>Menor Nota de Trabalho: ${menorTrabalho} <br> Meior Nota de Trabalho: ${maiorTrabalho}</h6>`; //Menor e a maior notas de trabalho
    
}
*/
/*
function notas(){
    qtdAlunos = document.getElementById('qtdAlunos').value;
    console.log(qtdAlunos);

    for(let i=0; i<qtdAlunos; i++){
        //$("body").append("<h1> Qual a nota do Aluno 14</h1>");
        document.querySelector("#aluno").innerHTML += "<h1>"+ "Qual a nota do Aluno"+ i +"</h1>";
        document.querySelector("#aluno").innerHTML += "<input type='number' id='qtdPessoas' name='qtdPessoas'>"
        

    }
}


var qtdAlunos = prompt("Digite a quantidade de alunos:");
var prova = [];
var provaTotal = 0;
var trabalho = [];
var trabalhoTotal = 0;
var mediaGeral = 0

for(let i=0; i<qtdAlunos; i++){
    prova[i] = Number(prompt("Digite a nota da prova Aluno " + (i+1)));
    trabalho[i] = Number(prompt("Digite a nota do trabalho Aluno " + (i+1)));
    provaTotal += prova[i];
    trabalhoTotal += trabalho[i]; 
}

for(let i=0; i<qtdAlunos; i++){
    var media = ((prova[i]*2)+(trabalho[i]*3))/5;
    console.log("Media aluno " + i + ": " + media);
    mediaGeral += media
}

console.log("Média Geral: "+mediaGeral/qtdAlunos)

console.log("Média Aritmética das Provas: "+provaTotal/qtdAlunos)
console.log("Média Aritmética dos Trabalhos: "+trabalhoTotal/qtdAlunos)


var maiorProva = 0;
var menorProva = prova[0];
for (var i = 0; i < prova.length; i++) {
   if ( prova[i] > maiorProva ) {
      maiorProva = prova[i];
   }
   if ( prova[i] < menorProva ) {
    menorProva = prova[i];
 }
}
console.log("Maior"+ maiorProva +"Menor"+ menorProva)


var maiorTrabalho = 0;
var menorTrabalho = trabalho[0];
for (var i = 0; i < trabalho.length; i++) {
   if ( trabalho[i] > maiorTrabalho ) {
      maiorTrabalho = trabalho[i];
   }
   if ( trabalho[i] < menorTrabalho ) {
    menorTrabalho = trabalho[i];
 }
}

console.log("Maior"+ maiorTrabalho +"Menor"+ menorTrabalho)
*/