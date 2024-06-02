const form = document.getElementById('form-agenda')
const agenda = []

form.addEventListener('submit', function (e) {
    e.preventDefault()
    incluirItem()
})

function incluirItem() {
    const inputNome = document.getElementById('nome').value
    const inputTelefone = document.getElementById('telefone').value

    // checar se nome tem mais de um elemento
    if (inputNome.split(' ').length <= 1) {
        alert('Informe o nome completo.')
        return 
    }
    
    agenda.push({nome: inputNome.toUpperCase(), telefone: inputTelefone})
    limparCampos()
    gerarTabela()
}

function limparCampos() {
    document.getElementById('nome').value = ''
    document.getElementById('telefone').value = ''
}

function gerarTabela() {

    let linha = ``;
    agenda.forEach((el, key) => {
        linha += `
        <tr>
            <td>${el.nome}</td>
            <td>${el.telefone}</td>
            <td><button type="button" class="btn-excluir" onClick="excluirItem(${key})">Excluir</button></td>
        </tr>`
    })

    let rodape = `<tr><td colspan="2">Total de registro(s): ${agenda.length}</td></tr>`;

    const tbody = document.getElementById('corpo-tabela')
    const tfoot = document.getElementById('rodape-tabela')

    tbody.innerHTML = linha
    tfoot.innerHTML = rodape

}

function excluirItem(key) {
    if (confirm(`Confirma a exclusão do contato ${agenda[key].nome}?`) == true) {

        agenda.splice(key, 1)
        gerarTabela()
    }

}