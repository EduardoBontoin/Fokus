const btnDeletarConcluidas = document.querySelector('#btn-remover-concluidas')
const btnDeletarTodas = document.querySelector('#btn-remover-todas')

const removerTarefas = (somenteConcluidas) => {
    const seletor = somenteConcluidas ? '.app__section-task-list-item-complete' : '.app__section-task-list-item'
    document.querySelectorAll(seletor).forEach((element) => {
        element.remove();
    });

    tarefas = somenteConcluidas ? tarefas.filter(t => !t.concluida) : []
    updateLocalStorage()
}

btnDeletarConcluidas.addEventListener('click', () => removerTarefas(true))
btnDeletarTodas.addEventListener('click', () => removerTarefas(false))

const removerTarefas = (somenteConcluidas) => {
    const seletor = somenteConcluidas ? 'app__section-task-list-item-complete' : 'app__section-task-list-item'
    document.querySelectorAll(seletor).forEach((element) => {
        element.remove();
    });

   tarefas = somenteConcluidas ? tarefas.filter(t => !t.concluida) : []
   updateLocalStorage()

}
btnDeletarTodas.addEventListener('click',() =>removerTarefas(false))

btnDeletarConcluida.addEventListener('click',()=>removerTarefas(true))