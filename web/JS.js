INDEX.JS

  /* Cria constante */
  const emailCred = "admin@gmail.com";
  const senhaCred = "admin123";

  /* Pegando elementos */
  const inptEmail = document.getElementById("nomeId1");
  const inptSenha = document.getElementById("NomeId2");
  const btnEntrar = document.getElementById("NomeId3");

  /* O que acontece quando clica no botão */
  btnEntrar.onclick = () => {
      console.log("cliquei"); /*Imprime no console*/
      validate(inptEmail.value, inptSenha.value); 
      /* Chama função validate e passa valores digitados nos inputs */
      /* O .value pega o que foi escrito nos inputs */
  }

  /* Validação */
  /* Function agrupa, pode reusar */
  /* Chama a função validade e cria 2 variáveis */
  function validate(email, senha) {
      console.log("recebi ", email, senha); /* Imprime que recebeu */
      if (email == emailCred && senha == senhaCred) { /*Se for igual, imprime "LOGADO"*/
          console.log("LOGADO");
          window.location.href = "./paginas/inicial.html"; /* Vai pra essa página */
      }
      else{
          alert("Campos invalidos"); /* Alerta */
      }
  }



INICIAL.JS
  console.log("JS RODANDO");

/* let pode ser reatribuído (valor pode mudar), const não */
/* let cria variável chamada filmes e guarda em lista */
  let filmes = [ /* Cria array com objetos com 3 propriedades */
      {
          "titulo": "As aventuras de PI",
          "genero": "aventura",
          "ano": 2015
      },
      {
          "titulo": "Kung fu Panda",
          "genero": "animação",
          "ano": 2008
      },
      {
          "titulo": "Os vingadores",
          "genero": "ação",
          "ano": 2012
      },
      {
          "titulo": "Capitão américa - Guerra civil",
          "genero": "ação",
          "ano": 2016
      }
  ]

  /* Cria variável pegando o tbody do html de tabela*/
  const tabelaCorpo = document.getElementById("NomeTbody");

  /* Cria variável = filmes e usa .map() pra percorrer objetos do array filmes */
  /*  Pra cada item, retorna um template string */
  /* ${item.objeto} insere cada objeto*/
  let respostaMap = filmes.map(item => `
              <tr>
                  <td>${item.titulo}</td>
                  <td>${item.genero}</td>
                  <td>${item.ano}</td>
              </tr>
      `).join("");
  /*  .join("") junta tudo em uma string */
  console.log(respostaMap); /* Mostra no console */
  
  NomeTbody.innerHTML = respostaMap; /* Insere no html */
