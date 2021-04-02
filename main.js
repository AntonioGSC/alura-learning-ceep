import BotaoConclui from './components/concluiTarefa.js';
import BotaoDeleta from './components/deletaTarefa.js';
(() => {
  const novaTarefa = document.querySelector('[data-form-button]');
  const inputTarefa = document.querySelector('[data-form-input]');
  const lista = document.querySelector('[data-list]');

  const criarTarefa = (event) => {
    event.preventDefault();

    const valor = inputTarefa.value;
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);

    inputTarefa.value = '';
  };

  novaTarefa.addEventListener('click', criarTarefa);
})();
