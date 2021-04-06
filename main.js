import BotaoConclui from './components/concluiTarefa.js';
import BotaoDeleta from './components/deletaTarefa.js';
(() => {
  const novaTarefa = document.querySelector('[data-form-button]');
  const lista = document.querySelector('[data-list]');

  const handleNovoItem = (event) => {
    event.preventDefault();

    const calendario = document.querySelector('[data-form-data]');
    const inputTarefa = document.querySelector('[data-form-input]');

    const valor = inputTarefa.value;
    const data = moment(calendario.value);
    const dataFormatada = data.format('DD/MM/YYYY');
    const dados = {
      valor,
      dataFormatada,
    };

    const tarefa = criarTarefa(dados);
    lista.appendChild(tarefa);

    sessionStorage.setItem('tarefas', dados);

    inputTarefa.value = '';
  };

  const criarTarefa = ({ valor, dataFormatada }) => {
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    return tarefa;
  };

  novaTarefa.addEventListener('click', handleNovoItem);
})();
