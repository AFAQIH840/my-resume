/**
   * tambahan nya untuk ngitung 
   */
// JavaScript
const questions = [
    {
      question: "Apa kata Bahasa Arab untuk 'rumah'?",
      options: {
        a: "Bayt",
        b: "Maghrib",
        c: "Masjid",
      },
      correctAnswer: "a",
    },
    {
      question: "Apa arti kata 'salam' dalam Bahasa Arab?",
      options: {
        a: "Makan",
        b: "Damai",
        c: "Buku",
      },
      correctAnswer: "b",
    },
    // Tambahkan lebih banyak soal seperti di atas
  ];
  
  const quizForm = document.getElementById('quiz-form');
  const quizQuestions = document.getElementById('quiz-questions');
  const quizResult = document.getElementById('quiz-result');
  
  // Buat fungsi untuk mengisi soal kuis secara dinamis
  function fillQuizQuestions() {
    questions.forEach((questionData, index) => {
      const questionNumber = index + 1;
      const questionElement = document.createElement('li');
      questionElement.innerHTML = `
        <label for="q${questionNumber}">${questionData.question}</label>
        <input type="radio" id="q${questionNumber}" name="q${questionNumber}" value="a"> ${questionData.options.a}
        <input type="radio" id="q${questionNumber}" name="q${questionNumber}" value="b"> ${questionData.options.b}
        <input type="radio" id="q${questionNumber}" name="q${questionNumber}" value="c"> ${questionData.options.c}
      `;
      quizQuestions.appendChild(questionElement);
    });
  }
  
  // Buat fungsi untuk menghitung hasil kuis
  function calculateQuizResult() {
    let score = 0;
    questions.forEach((questionData, index) => {
      const questionNumber = index + 1;
      const selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === questionData.correctAnswer) {
        score++;
      }
    });
    return score;
  }
  
  // Tambahkan event listener untuk tombol Submit
  document.getElementById('quiz-submit').addEventListener('click', function() {
    const score = calculateQuizResult();
    quizResult.innerHTML = `Skor Anda: ${score} dari ${questions.length}`;
  });
  
  // Inisialisasi soal kuis
  fillQuizQuestions();
  
  