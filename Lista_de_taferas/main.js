$(document).on('click', '.lista_tarefa h3', function () {
    // Remove a classe 'active' de todos os elementos
    $('.lista_tarefa h3').removeClass('active');

    // Adiciona a classe 'active' apenas ao elemento clicado
    $(this).addClass('active');
});

$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const novaTarefa = $('#nova_tarefa').val(); 
        if (novaTarefa === '') {
            alert('A tarefa não pode estar vazia!');
            return;
        }

        const adicionaNovaTarefa = $(`
            <li style="display: none">
                <div class="lista_tarefa">
                    <h3>${novaTarefa}</h3>
                </div>
            </li>
        `);

        // Adiciona a nova tarefa à lista
        adicionaNovaTarefa.appendTo('ul').fadeIn(500);
        $('#nova_tarefa').val(''); // Limpa o campo de input
    });
});
