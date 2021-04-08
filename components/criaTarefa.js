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
  const horario = data.format('HH:mm');
  const dataFormatada = data.format('DD/MM/YYYY');
  const concluida = false;

  const dados = {
    valor,
    dataFormatada,
    horario,
    concluida,
  };

  tarefas.push(dados);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  carregaTarefa();
  inputTarefa.value = '';
};

export const Tarefa = ({ valor, horario, concluida }, id) => {
  const tarefa = document.createElement('li');
  const conteudo = `<p class="content">${horario} * ${valor}</p>`;
  if (concluida) {
    tarefa.classList.add('done');
  }
  tarefa.classList.add('task');
  tarefa.innerHTML = conteudo;
  tarefa.appendChild(BotaoConclui(carregaTarefa, id));
  tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

  return tarefa;
};
