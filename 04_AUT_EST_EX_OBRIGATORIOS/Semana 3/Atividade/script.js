var tempoTotal = ""
var alturaMaxima = ""
function calcular(){
    var velocidadeInicial = Number(document.getElementById('valorInicial').value)
    const gravidade = 10

    tempoTotal = velocidadeInicial/gravidade
    alturaMaxima  = (velocidadeInicial**2)/(2*gravidade)

    document.getElementById('resultado1').innerHTML = "Tempo total: " + tempoTotal + " segundos";
    document.getElementById('resultado2').innerHTML = "Altura Máxima: " + alturaMaxima + " metros";
}