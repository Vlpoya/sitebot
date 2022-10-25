const button = document.querySelector('#btn-ask');
const btnLow = document.querySelector('.btn_low');
const mainDiv = document.querySelector('#tab');
const firstDiv = document.querySelector('#first-div');
const inputText = document.querySelector('#inpt');

const giveAnswer = (str) => {
  function randomAnswer() {
    const arr = ['А вот скажите-ка лучше, исчезнет ли театр?', 'А зачем вам это знать??', 'А давайте подумаем, вытеснит ли компьютер книгу?', 'Да бросьте вы...', 'Ну сколько можно повторять одно и то же?', 'Куда ты скачешь, гордый конь, и где опустишь ты копыта?', 'Ну кто же такое знает!'];
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }
  const arrMain = ['Зачем? Потому что вы должены сделать это!', 'Почему? Потому что так надо!', 'Сходите в лес!', 'Пойти? Лучше останьтесь дома и заняться полезными делами!', 'Заняться? Сидите дома и учите ангийский язык', 'Сколько? Да такое и не сосчитать!', 'Нужно ли? Определенно нужно!', 'Конечно! Удача вам благоволит!', 'Можно? Да, вам это можно!', 'Сложно? Для вас нет такого слова!'];
  const arr = str.split(' ');
  for (let word of arr) {
    for (let i = 0; i < arrMain.length; i++) {
      word = word.toLowerCase().slice(0, 3);
      if (arrMain[i].toLowerCase().includes(word)) {
        return arrMain[i];
      }
    }
  }
  return randomAnswer();
};

button.addEventListener('click', (el) => {
  const x = document.getElementById('inpt').value;
  const btn = el.target;
  event.preventDefault();

  if (btn.tagName !== 'BUTTON') {
    return;
  }
  if (x === '') {
    event.preventDefault();
    return;
  }

  function showFirstBlock(element) {
    element.style.display = 'flex';
  }

  const div = document.createElement('div');
  div.setAttribute('id', 'first-div');
  div.setAttribute('data-id', 'new-div');

  const divTabR = document.createElement('div');
  divTabR.setAttribute('id', 'tab-l');
  divTabR.setAttribute('class', 'tabl-fild');

  const divTabL = document.createElement('div');
  divTabL.setAttribute('id', 'tab-r');
  divTabL.setAttribute('class', 'tabl-fild');

  const pAsk = document.createElement('p');
  pAsk.setAttribute('id', 'pAsk');
  pAsk.setAttribute('class', 'tab-l-text');
  pAsk.innerText = (x);
  inputText.value = '';
  divTabR.appendChild(pAsk);

  const pAnswer = document.createElement('p');
  pAnswer.setAttribute('id', 'pAnswer');
  pAnswer.setAttribute('class', 'tab-r-text');
  pAnswer.innerText = giveAnswer(x);
  inputText.value = '';
  divTabL.appendChild(pAnswer);
  div.appendChild(divTabR);
  div.appendChild(divTabL);
  showFirstBlock(div);

  showFirstBlock(firstDiv);
  showFirstBlock(btnLow);
  mainDiv.appendChild(div);
});

btnLow.addEventListener('click', (event) => {
  const cloneNodes = document.querySelectorAll("div[data-id='new-div']");
  if (event.target.closest('BUTTON')) {
    cloneNodes.forEach((e) => e.remove());
    event.preventDefault();
    function hideElement(elem) {
      elem.style.display = 'none';
    }
    hideElement(btnLow);
    hideElement(firstDiv);
  }
});
