const faqItem = document.querySelectorAll('.faq__block-item');
const faqQuestion = document.querySelectorAll('.faq__block-question');
const faqAnswer = document.querySelectorAll('.faq__block-answer');

faqItem.forEach(item => {
  const question = item.querySelector('.faq__block-question');
  const answer = item.querySelector('.faq__block-answer');

  const height = answer.clientHeight;

  answer.style.height = 0;

  question.addEventListener('click', () => {
    // question.classList.toggle('active');
    // answer.classList.toggle('active');

    if (question.classList.contains('active')) {
      question.classList.remove('active');
      answer.classList.remove('active');
    } else {
      faqQuestion.forEach(quest => {
        quest.classList.remove('active');
      });
      faqAnswer.forEach(answ => {
        answ.classList.remove('active');
        answ.style.height = 0;
      });
      question.classList.add('active');
      answer.classList.add('active');
    }

    if (answer.classList.contains('active')) {
      answer.style.height = height + 'px';
    } else {
      answer.style.height = 0;
    }
  });
});
