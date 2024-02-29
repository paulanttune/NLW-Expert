const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "let myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converter um número para string",
        "Converter uma string para um número inteiro",
        "Arredondar um número para o inteiro mais próximo"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a saída do código: console.log(2 + '2' - 1);",
      respostas: [
        "22",
        "3",
        "21"
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "String"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas: [
        "function",
        "method",
        "define"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do código: console.log(typeof([]));",
      respostas: [
        "array",
        "object",
        "undefined"
      ],
      correta: 1
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores e tipos de dados",
        "Atribuição",
        "Compara apenas os valores"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
      respostas: [
        "Arredonda um número para um número específico de casas decimais",
        "Retorna a parte inteira de um número",
        "Converte um número para uma string"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'map()' faz em um array em JavaScript?",
      respostas: [
        "Modifica o array original",
        "Cria um novo array com os resultados de uma função aplicada a cada elemento do array original",
        "Remove o último elemento do array"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set ()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  
  for (const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector("h3").textContent = item.pergunta
  
  
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt"). cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf  (item))
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) =>{
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }
  
    quizItem.querySelector("dl").appendChild(dt)
  }
  
  quizItem.querySelector("dl dt").remove()
  
  
  
   quiz.appendChild(quizItem)
  }