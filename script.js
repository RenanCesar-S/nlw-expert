const questions = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação de estilo orientado a objetos.",
            "Um software de edição de imagens.",
            "Um sistema operacional.",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Compara valores, sem levar em conta o tipo de dado.",
            "Atribui um valor a uma variável.",
            "Compara valores, levando em conta o tipo de dado.",
        ],
        correta: 2
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um tipo de dado para armazenar texto.",
            "Um bloco de código que pode ser reutilizado.",
            "Uma variável global.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "const myVar = 10;",
            "variable x = 5;",
            "let = value;",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Uma linguagem de programação.",
            "Um modelo de objeto de documento que representa a estrutura da página.",
            "Um framework popular.",
        ],
        correta: 1
    },
    {
        pergunta: "Como você faz um loop 'for' em JavaScript?",
        respostas: [
            "loop(for i = 0; i < 5; i++)",
            "for (i = 0; i < 5; i++)",
            "for (let i = 0; i < 5; i++)",
        ],
        correta: 2
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "Uma biblioteca de gráficos.",
            "Um formato de dados para intercâmbio de informações.",
            "Um método de ordenação de arrays.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
        respostas: [
            "Criar um novo elemento HTML.",
            "Adicionar um ouvinte de eventos a um elemento HTML.",
            "Remover um elemento HTML.",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o AJAX em JavaScript?",
        respostas: [
            "Uma linguagem de programação.",
            "Uma técnica que permite atualizar partes de uma página sem recarregar a página inteira.",
            "Um framework de testes.",
        ],
        correta: 1
    },
    {
        pergunta: "Como você comenta uma linha de código em JavaScript?",
        respostas: [
            "// Isto é um comentário",
            "# Isto é um comentário",
            "/* Isto é um comentário */",
        ],
        correta: 0
    },
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template");

const corrects = new Set();
const totalOfQuestions = questions.length;
const showTotal = document.querySelector("#hits span");
showTotal.textContent = `${corrects.size} of ${totalOfQuestions}`;

// Clonando as perguntas
for(let item of questions) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h3").textContent = item.pergunta;

    // Clonar o dt para as alternativas
    for(let alternative of item.respostas) {
        const dt = quizItem.querySelector("dl dt").cloneNode(true);
        dt.querySelector("span").textContent = alternative;
        dt.querySelector("input").setAttribute('name', 'question-' + questions.indexOf(item));
        dt.querySelector("input").value = item.respostas.indexOf(alternative);
        dt.querySelector("input").onchange = (event)=> {
            const itsCorrect = event.target.value == item.correta;

            corrects.delete(item);
            if(itsCorrect) {
                corrects.add(item);
            }

            showTotal.textContent = `${corrects.size} of ${totalOfQuestions}`;
        }
        

        quizItem.querySelector("dl").appendChild(dt);
    }


    // Remove a "Pergunta A"
    quizItem.querySelector("dl dt").remove();

    // coloca a pergunta na tela
    quiz.appendChild(quizItem);
}