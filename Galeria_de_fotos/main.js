$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao_cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereçoDaNovaImagem = $('#endereço_imagem_nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endereçoDaNovaImagem}"/>`).appendTo(novoItem);
        $(` <div class="overlay_imagem_link">
                <a href="${endereçoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); //Está em milisegundos, 2000 = 2seg
        $('#endereço_imagem_nova').val('');
    })
})