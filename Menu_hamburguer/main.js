$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle(); // Realiza a verificação se o elemento esta visivel ou não, caso esteja invisível, ele se torna visível, caso esteja visível, se torna invisível.
    })

    $('#telefone').mask('(00) 00000-0000', {  // 0 - utilizado para determinar que o parâmetro é um número, e, S quando o parâmetro deve ser uma letra
        placeholder: ('(__) _____-____')
    });

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            mensagem:{
                required: true
            },
            veiculoInteresse:{
                required: false
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome',
            email: 'Este campo é obrigatório',
            telefone: 'Este campo é obrigatório'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);

            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();
        
        $('#veiculoInteresse').val(nomeVeiculo);
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})