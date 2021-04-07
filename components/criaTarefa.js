import { carregaTarefa } from './carregaTarefa.js';
import BotaoConclui from './concluiTarefa.js';
import BotaoDeleta from './deletaTarefa.js';

export const handleNovoItem = (event) => {
  event.preventDefault();

  const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
  const calendario = document.querySelector('[data-form-data]');
  const inputTarefa = document.querySelector('[data-form-input]');

  const valor = inputTarefa.value;
  const data = moment(calendario.value);
  const dataFormatada = data.format('DD/MM/YYYY');
  const dados = {
    valor,
    dataFormatada,
  };

  tarefas.push(dados);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  carregaTarefa();
  inputTarefa.value = '';
};

export const Tarefa = ({ valor, dataFormatada }) => {
  const tarefa = document.createElement('li');
  tarefa.classList.add('task');
  const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;
  tarefa.innerHTML = conteudo;
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  return tarefa;
};
