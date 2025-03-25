document.addEventListener('DOMContentLoaded',function(){

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
