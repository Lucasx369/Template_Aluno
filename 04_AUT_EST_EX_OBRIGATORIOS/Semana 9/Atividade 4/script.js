function calcular(){ //Função calcular a sequência de Fibonacci até um determinado valor
    var termo = Number(document.getElementById("termo").value); //Número inserido pelo usuário
    var fib = [1,1]; //Lista da sequência de Fibonacci
    for(var i=2; i<termo; i++){ //For utilizado para criar a lista até chegar ao termo fornecido pelo usuário
        var novoTermo = fib[i-1]+fib[i-2]; //Cada termo novo é a soma dos dois números anteriores
        fib.push(novoTermo); //Método para adicionar elemento a lista 
    }
    alert("A sequência de Fibonacci até o "+termo+"° termo é: "+fib);
}