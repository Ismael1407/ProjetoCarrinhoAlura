let totalGeral = 0;
limpar();

const inputQuantidade = document.getElementById('quantidade');

inputQuantidade.addEventListener('keydown', function (e) {
    if (e.key === '.' || e.key === ',') {
        e.preventDefault(); // bloqueia ponto ou vírgula
    }
});

function adicionar() {
    //recuperar valores nome do produto, quantidade e preço
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = Number(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let mensagemErro = document.getElementById('mensagem-erro');

    if ((quantidade) == 0 || quantidade == '') {
        mensagemErro.textContent = 'coloque a quantidade de produtos';
        mensagemErro.classList.add('visivel');
        return;
    }

    mensagemErro.classList.remove('visivel');
    mensagemErro.textContent = '';

    //calcular preco, subtotal
    let preco = quantidade * valorUnitario;
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${valorUnitario}</span>
        </section>`

    //atualizar o total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;


    const inputQuantidade = document.getElementById('quantidade');





}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$0`;
    totalGeral = 0;
}