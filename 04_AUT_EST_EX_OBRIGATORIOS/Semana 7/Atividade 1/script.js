var produto = 0 //Variável da quantidade de produtos
function mostrar(){ //Função para visualizar o valor da quantidade de produtos
    produto = parseInt(document.getElementById("produto").value);
    document.querySelector('#qtdProduto').innerHTML = produto + " Produto(s)";
}

function adicionar(){ //Função para adicionar uma unidade do produto, sempre que o botão "Adicionar" for clicado
    produto++;
    document.querySelector('#qtdProduto').innerHTML = produto + " Produto(s)";
}

function retirar(){ //Função para subtrair uma unidade do produto, sempre que o botão "Retirar" for clicado
    produto--;
    document.querySelector('#qtdProduto').innerHTML = produto + " Produto(s)";
}