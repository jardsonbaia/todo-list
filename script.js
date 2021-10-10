
let id = 1;

function construirTarefa() {
    const nomeAtividade = document.getElementById("input_tarefa").value
    const tarefa = `<div id="${id}" class="box_atividade" onclick="marcar(this)">
    <p class="descricao_atividade">${nomeAtividade}</p>
    <button class="excluir_atividade" onclick="excluir(${id})">X</button>
    </div>`
    id += 1
    return tarefa
}

function adicionarTarefa() {
    
    if(document.getElementById('input_tarefa').value != '' ) {
        document.getElementById('tarefas_adicionadas').innerHTML += construirTarefa()
        document.getElementById("input_tarefa").value = ""
    }
    else {
        alert('Digite algo!', 'Opa')
    }
}

function marcar(element) { 
    let modo = element.getAttribute('class')

    if(modo.includes('completado')) {
        element.className = 'box_atividade'
    }
    else {
        element.className = 'box_atividade completado'
    }
}

function excluir(id) {
    let lista_tarefas = document.getElementById('tarefas_adicionadas')
    let tarefa = document.getElementById(id);
    lista_tarefas.removeChild(tarefa)
}

function pressEnter(event) {
    if(event.keyCode == 13) {
        document.getElementById('add_button').click()
    }
}
