
document.addEventListener('DOMContentLoaded',function(){

    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade= document.getElementById('opcoes-acessbilidade');
    botaoAcessibilidade.addEventListener('click', function(

    ) {
    botaoAcessibilidade.classList.toggle('rotacao-botao');
    opcoesAcessibilidade.classList.toggle('apresenta-lista')};
    )}
    );


    const aumentarFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    
    let tamanhoAtualFont= 1;
    
    aumentarFonteBotao.addEventListener('click', function(){
    tamanhoAtualFont += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    diminuirFonteBotao.addEventListener('click', function(){
        tamanhoAtualFont += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

})
})
