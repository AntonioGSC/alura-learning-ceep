import { handleNovoItem } from './components/criaTarefa.js';

(() => {
  const novaTarefa = document.querySelector('[data-form-button]');

  novaTarefa.addEventListener('click', handleNovoItem);
})();
