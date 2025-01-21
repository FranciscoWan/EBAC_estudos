const form = document.getElementById('campo_input');
const contato = [];
const numero = [];

let linhas = "";

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne atualzação da pagina ao apertar "submit"

    adicionarLinha();
    atualizaLinha();
});

function adicionarLinha(){;
    const input_contato = document.getElementById('nome_contato');
    const input_numero = document.getElementById('numero_contato');

    if(numero.includes(input_numero.value)){
        alert(`O número ${input_numero.value} já está registrado.`);
    }
    else{
        numero.push(input_numero.value);

        // Adiciona os valores do nome e numero as variáveis globais, contato e numero.
        contato.push(input_contato.value);
        

        //cria uma nova linha
        let linha = "<tr>";
        linha += `<td>${input_contato.value}</td>`;
        linha += `<td>${input_numero.value}</td>`;
        linha += "</tr>" // Fechamento da linha

        // Adiciona a nova linha ao conteúdo existente
        linhas += linha;
    }
    // Verificação no log que os dos estão corretos
    console.log(input_contato.value);
    console.log(input_numero.value);

    // Limpa os campos de input após o submit
    input_contato.value = "";
    input_numero.value = ""; 
}

function atualizaLinha(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas; //atualiza a linha da tabela com os dados
}