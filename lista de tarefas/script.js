let tarefas = []

function adicionarTarefa() {
    //busca o input no html
    const inputTarefa = document.getElementById("inputTarefa")
    //pega o que escreveu no input
    let tarefa = inputTarefa.value
    //ao invés de repetir códigos, crie uma variável
    let mensagem = document.getElementById("atualizacao")
    //condicional caso o usuario nao digite nada
    if (tarefa == ""){
        mensagem.textContent = "Item inválido."
    } else {
        mensagem.textContent = "Tarefa adicionada!"
        tarefas.push(tarefa)
    //busca a ul
        const listaTarefa = document.getElementById("listaTarefa")
        //cria um li
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        //pega a tag pai para localizar a criação do li
        listaTarefa.appendChild(novaTarefa)
        //apaga o que escreveu
        inputTarefa.value = ""
    }
  }