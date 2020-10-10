'use strict'

{
const quiz = [
  {
    question: '乃木坂46のデビュー曲はどれ？',
    answers: [
      'ぐるぐるカーテン',
      'ガールズルール',
      '制服のマネキン',
      'インフルエンサー'
    ],
    correct: 'ぐるぐるカーテン'

  }, {
    question: '乃木坂46で最も売れた曲は？(2020年9月18日現在)',
    answers: [
      '君の名は希望',
      '帰り道は遠回りしたくなる',
      'シンクロニシティ',
      'インフルエンサー'
    ],
    correct: '帰り道は遠回りしたくなる'
  }, {
    question: '次のうち御三家ではないのは誰？',
    answers: [
      '白石麻衣',
      '西野七瀬',
      '松村沙友理',
      '橋本奈々未'
    ],
    correct: '西野七瀬'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズの問題、選択肢
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  }else{
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了。あなたの正解数は' + score + '/' + quizLength + 'です' );
  }
};

let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}





}