// Referências aos elementos
const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

// Função para adicionar um capítulo
function addChapter() {
    // Cria um novo item de lista e botão de deletar
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Configura o texto do item de lista e do botão
    li.textContent = input.value;
    deleteButton.textContent = '❌';

    // Adiciona classes aos elementos, se necessário (opcional)
    li.classList.add('list-item');
    deleteButton.classList.add('delete');

    // Anexa o botão de deletar ao item de lista
    li.appendChild(deleteButton);

    // Anexa o item de lista à lista não ordenada
    list.appendChild(li);

    // Limpa o campo de entrada
    input.value = '';

    // Adiciona evento de clique ao botão de deletar
    deleteButton.onclick = function() {
        list.removeChild(li);
    };
}

// Adiciona evento de clique ao botão principal para adicionar um capítulo
button.addEventListener('click', addChapter);
