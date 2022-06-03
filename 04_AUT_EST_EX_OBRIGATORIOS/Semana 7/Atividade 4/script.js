function calcular(){
    var qtdPessoas = document.getElementById("qtdPessoas").value; //Variável de quantidade de pessoas
    var select = document.getElementById("periodo");
    var periodo = select.options[select.selectedIndex].value; //Variável que contém o período do voo selecionado
    var valor = 0; //Variável do valor total da compra
    var valorDiurno = 200; //Variável do valor da passagem, se o voo for diurno
    var valorNoturno = 100; //Variável do valor da passagem, se o voo for noturno
    switch(periodo){//Com base no período é definido o valor
        case "diurno": //Caso seja diurno, o valor é de 200 reais, podendo receber desconto, conforme a quantidade de passageiros
            if(qtdPessoas>50){ //Se a quantidade de passageiros for maior que 50, o valor do desconto é de 40%
                valor = valorDiurno - (valorDiurno * 0.4);
            }else{
                valor = valorDiurno;
            }
            break;
        case "noturno": //Caso seja noturno, o valor é de 100 reais, podendo receber desconto, conforme a quantidade de passageiros
            if(qtdPessoas>50){ //Se a quantidade de passageiros for maior que 50, o valor do desconto é de 20%
                valor = valorNoturno - (valorNoturno * 0.2);
            }else{
                valor = valorNoturno;
            }
            break;
    }
    document.querySelector('#valor').innerHTML += "<h4> Valor da sua passagem é de: " + valor + " Reais <h4>"; //O valor da passagem é apresentado no html
}
