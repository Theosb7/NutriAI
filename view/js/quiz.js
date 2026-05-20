document.addEventListener('DOMContentLoaded', () => {
  const quizContent = document.getElementById('quiz-content');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const progressBar = document.querySelector('.progress-bar');

  const questions = [
    {
      question: "Vamos começar!",
      description: "Bem-vindo ao NutriAI. Responda a algumas perguntas para que possamos criar um plano personalizado para você.",
      type: "welcome"
    },
    {
      question: "Qual é sua idade?",
      description: "Isso nos ajuda a calcular suas necessidades calóricas diárias.",
      type: "number",
      key: "age",
      placeholder: "Anos"
    },
    {
      question: "Qual é o seu peso atual?",
      description: "Usaremos para calcular suas porções ideais e ajustar seu plano de treino.",
      type: "number",
      key: "weight",
      placeholder: "kg"
    },
    {
      question: "Qual é a sua altura?",
      description: "Usaremos para calcular suas porções ideais e ajustar seu plano de treino.",
      type: "number",
      key: "height",
      placeholder: "cm"
    },
    {
      question: "Qual é o seu gênero?",
      description: "Ajuda a personalizar suas necessidades nutricionais e plano de treino.",
      type: "radio",
      key: "gender",
      options: ["Masculino", "Feminino", "Prefiro não dizer"]
    },
    {
      question: "Qual é o seu objetivo?",
      description: "Vamos criar um plano focado no seu resultado.",
      type: "radio",
      key: "goal",
      options: ["Perder peso", "Ganhar massa muscular", "Manter peso", "Melhorar performance"]
    },
    {
      question: "Como está sua rotina hoje?",
      description: "Isso define quantas calorias você precisa.",
      type: "radio",
      key: "activityLevel",
      options: [
        { label: "Sedentário", value: "Pouco ou nenhum exercício" },
        { label: "Levemente ativo", value: "Exercícios leves 1-3 dias/sem" },
        { label: "Moderadamente ativo", value: "Esportes 3-5 dias" },
        { label: "Muito ativo", value: "Exercício pesado 6-7 dias/sem" }
      ]
    },
    {
      question: "Quantas vezes por semana você consegue treinar?",
      description: "Considere o que é realista para você.",
      type: "radio",
      key: "trainingFrequency",
      options: ["1-2 vezes", "3 vezes", "4-5 vezes", "Não treino atualmente"]
    },
    {
      question: "Como é a sua alimentação hoje?",
      description: "Não existe resposta certa.",
      type: "radio",
      key: "diet",
      options: ["Irregular", "Balanceada na maior parte do tempo", "Estruturada", "Não sigo nenhum padrão"]
    },
    {
      question: "Qual efeito colateral você tem mais receio?",
      description: "Essas informações ajudam a prevenir os desconfortos.",
      type: "radio",
      key: "sideEffect",
      options: ["Náusea", "Fadiga", "Constipação", "Diarreia", "Dor de cabeça", "Refluxo", "Perda de apetite", "Nenhum em específico"]
    },
    {
      question: "O que está te levando a iniciar esse processo?",
      description: "Selecione o principal motivo.",
      type: "radio",
      key: "motivation",
      options: ["Melhorar a relação com meu corpo", "Ter mais energia no dia a dia", "Cuidar da saúde", "Um novo começo", "Um evento específico", "Outro motivo pessoal"]
    },
    {
      question: "Você tem restrições alimentares?",
      description: "Selecione a opção que melhor que te descreve.",
      type: "checkbox",
      key: "restrictions",
      options: ["Nenhuma restrição", "Vegetariano", "Vegano"],
      customOption: {
        label: "Tenho alergias",
        placeholder: "Escreva suas alergias aqui..."
      }
    },
    {
      question: "Alguma preferência?",
      description: "Opcional. Conte o que você quer comer.",
      type: "textarea",
      key: "preferences",
      placeholder: "Ex: Gosto de comida apimentada, prefiro evitar carne vermelha..."
    },
    {
      question: "Quase lá!",
      description: "Crie sua conta para salvar seu progresso e receber seu plano.",
      type: "login"
    }
  ];

  let currentQuestion = 0;
  const answers = {};

  function renderQuestion() {
    const question = questions[currentQuestion];
    let html = `<h2>${question.question}</h2><p class="description">${question.description}</p>`;

    switch (question.type) {
      case 'welcome':
        // No input needed
        break;
      case 'number':
        html += `<div class="input-group"><input type="number" id="${question.key}" placeholder="${question.placeholder}" value="${answers[question.key] || ''}"></div>`;
        break;
      case 'radio':
        html += '<div class="radio-group">';
        question.options.forEach(option => {
            const optionLabel = typeof option === 'object' ? option.label : option;
            const optionValue = typeof option === 'object' ? option.value : option;
            const isChecked = answers[question.key] === optionValue;
            html += `<label class="${isChecked ? 'selected' : ''}"><input type="radio" name="${question.key}" value="${optionValue}" ${isChecked ? 'checked' : ''}><span>${optionLabel}</span></label>`;
        });
        html += '</div>';
        break;
      case 'checkbox':
        html += '<div class="checkbox-group">';
        question.options.forEach(option => {
            const isChecked = answers[question.key] && answers[question.key].includes(option);
            html += `<label class="${isChecked ? 'selected' : ''}"><input type="checkbox" name="${question.key}" value="${option}" ${isChecked ? 'checked' : ''}><span>${option}</span></label>`;
        });
        if (question.customOption) {
            const isCustomChecked = answers[question.key] && answers[question.key].includes(question.customOption.label);
            html += `<label class="${isCustomChecked ? 'selected' : ''}"><input type="checkbox" name="${question.key}" value="${question.customOption.label}" ${isCustomChecked ? 'checked' : ''}><span>${question.customOption.label}</span></label>`;
            html += `<textarea id="custom-restriction" class="${isCustomChecked ? '' : 'hidden'}" placeholder="${question.customOption.placeholder}">${answers.customRestriction || ''}</textarea>`;
        }
        html += '</div>';
        break;
      case 'textarea':
        html += `<div class="input-group"><textarea id="${question.key}" placeholder="${question.placeholder}">${answers[question.key] || ''}</textarea></div>`;
        break;
      case 'login':
        html += `
          <div class="input-group">
            <input type="email" id="email" placeholder="E-mail" value="${answers.email || ''}">
            <input type="password" id="password" placeholder="Senha" value="${answers.password || ''}">
          </div>
        `;
        break;
    }
    quizContent.innerHTML = html;
    updateNavigation();
    updateProgressBar();
    addInputListeners();
  }

  function updateNavigation() {
    if (currentQuestion === 0) {
      prevBtn.style.visibility = 'hidden';
    } else {
      prevBtn.style.visibility = 'visible';
    }

    if (currentQuestion === questions.length - 1) {
      nextBtn.textContent = 'Gerar meu plano';
    } else {
      nextBtn.textContent = 'Avançar';
    }
  }
  
  function updateProgressBar() {
      const progress = (currentQuestion / (questions.length - 1)) * 100;
      progressBar.style.width = `${progress}%`;
  }

  function saveAnswer() {
    const question = questions[currentQuestion];
    if (!question.key) return;

    switch (question.type) {
        case 'number':
        case 'textarea':
            answers[question.key] = document.getElementById(question.key).value;
            break;
        case 'radio':
            const selectedRadio = document.querySelector(`input[name="${question.key}"]:checked`);
            if (selectedRadio) {
                answers[question.key] = selectedRadio.value;
            }
            break;
        case 'checkbox':
            const checkedBoxes = document.querySelectorAll(`input[name="${question.key}"]:checked`);
            answers[question.key] = Array.from(checkedBoxes).map(cb => cb.value);
            if(document.getElementById('custom-restriction')) {
                answers.customRestriction = document.getElementById('custom-restriction').value;
            }
            break;
        case 'login':
             answers.email = document.getElementById('email').value;
             answers.password = document.getElementById('password').value;
             break;
    }
  }
  
  function addInputListeners() {
    const question = questions[currentQuestion];
    if (question.type === 'radio' || question.type === 'checkbox') {
        const inputs = quizContent.querySelectorAll(`input[type="${question.type}"]`);
        inputs.forEach(input => {
            input.addEventListener('change', (e) => {
                // For radio, deselect others
                if(question.type === 'radio') {
                    quizContent.querySelectorAll('label').forEach(l => l.classList.remove('selected'));
                }
                // Toggle selected class on label
                const label = e.target.closest('label');
                if (label) {
                    label.classList.toggle('selected', e.target.checked);
                }
                 // Special handling for allergy text area
                if (question.key === 'restrictions' && e.target.value === 'Tenho alergias') {
                    document.getElementById('custom-restriction').classList.toggle('hidden', !e.target.checked);
                }
            });
        });
    }
  }

  nextBtn.addEventListener('click', () => {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      renderQuestion();
    } else {
      // Final step, "Gerar meu plano"
      console.log("Respostas Finais:", answers);
      window.location.href = 'index.html';
    }
  });

  prevBtn.addEventListener('click', () => {
    saveAnswer();
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuestion();
    }
  });

  renderQuestion();
});

// Adicionando a classe 'hidden' que pode estar faltando no CSS
const style = document.createElement('style');
style.innerHTML = `
  .hidden {
    display: none;
  }
`;
document.head.appendChild(style);
