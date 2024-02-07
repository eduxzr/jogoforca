
var palavras = [
    { "palavra": "açaí", "dicas": ["É uma fruta tropical ", "Fazemos polpa de coloração roxa."] },
    { "palavra": "maçã", "dicas": ["Doce e crocante ", "É uma excelente fonte de potássio."] },
    { "palavra": "amora", "dicas": ["Geralmente é vermelha ", "É pequena e doce."] },
    { "palavra": "caju", "dicas": ["Verde por fora e vermelho por dentro ", "Às vezes vem com bichinhos dentro."] },
    { "palavra": "uva", "dicas": ["Pode ser verde ou roxa ", "É usada para fazer sucos e vinhos."] },
    { "palavra": "coco", "dicas": ["Tem uma casca dura ", "Bebemos a deliciosa água que ele fornece."] },
    { "palavra": "kiwi", "dicas": ["Tem uma pele marrom e peluda ", "É rico em vitamina C."] },
    { "palavra": "figo", "dicas": ["Tem uma casca fina e é doce ", "É uma excelente fonte de vitamina C."] },
    { "palavra": "manga", "dicas": ["Tem uma polpa suculenta e doce ", "É uma fruta tropical."] },
    { "palavra": "jaca", "dicas": ["Tem a casca enrugada quando madura ", "Dizem que dá sono."] }
  ];
  
  var palavraSorteada;
  var primeiraLetra;
  
  function iniciarJogo() {

    palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
    primeiraLetra = palavraSorteada.palavra.charAt(0);

    document.getElementById("pergunta").innerHTML = "Adivinhe a palavra que começa com a letra '" + primeiraLetra + "'";

    document.getElementById("dicas").innerHTML = "Dicas: " + palavraSorteada.dicas.join(", ");
 
    document.getElementById("quantidade-letras").innerHTML = "Quantidade de Letras: " + palavraSorteada.palavra.length;
 
    document.getElementById("resposta").value = "";
  }
  
  function verificarResposta() {
    var respostaUsuario = document.getElementById("resposta").value.toLowerCase();
  
    if (respostaUsuario === palavraSorteada.palavra) {
      alert("Parabéns! Você acertou!");
      iniciarJogo(); 
    } else {
      alert("Ops! Você errou, a palavra correta é " + palavraSorteada.palavra);
    }
  }
  
  function darDica() {

    var dicas = palavraSorteada.dicas;
    var dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
  }
  