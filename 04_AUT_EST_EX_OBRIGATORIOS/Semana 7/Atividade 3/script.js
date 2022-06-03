function conferir(){
    var cel = document.getElementById("cel").value; //Váriavel que recebe o número de celular
    var tabCel = cel.split(''); //A string é dividida em pedaços
    
    if(tabCel[0]!="(" || tabCel[3]!=")" || tabCel[9]!="-"){ //Nesse estrutura se inicia conferindo se a estrutura está correto
        if(tabCel.length != 14){//Essa estrutura é para conferir a quantidade de caracteres inseridos
            alert("Erro! Está faltando campos e o formato está incorreto!") //Mensagem enviada caso os dois casos forem verdadeiros
        }else{
            alert("Erro! O formato está incorreto!") //Mensagem enviada caso apenas o primeiro caso seja verdadeiro
        }
    }else{//Se a estrutura está correta, é necessário apenas conferir se a quantidade caracteres enviadas está correta
        if(tabCel.length != 14){ 
            alert("Erro! Está faltando campos!")
        }else{
            alert("Parabéns! Está tudo correto") //Mensagem enviada caso o formato e a quantidade de caracteres sejam verdadeiras/corretas
        }
    }
}