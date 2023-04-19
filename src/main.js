import './style.css';
import validator from 'validator';

const campoDeTexto = document.getElementById('value');
const button = document.getElementById('button');
const seletor = document.getElementById('option');
const textoDeSaida = document.getElementById('answer');

const UUI_ID = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    hexColor: validator.isHexColor(campoDeTexto.value),
    email: validator.isEmail(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, UUI_ID),
    url: validator.isURL(campoDeTexto.value),
  };
  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});
