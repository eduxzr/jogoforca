
var palavras = [
  { "palavra": "açaí", "dicas": ["Originária da região amazônica.", "Famosa por ser utilizada em tigelas nutritivas."] },
  { "palavra": "maçã", "dicas": ["Variedade de cores, incluindo vermelha e verde.", "Comumente usada em sobremesas e tortas."] },
  { "palavra": "amora", "dicas": ["Encontrada em arbustos.", "Uma ótima opção para compotas e geleias."] },
  { "palavra": "caju", "dicas": ["Fruto de casca fina e suculenta.", "A castanha de caju também é apreciada."] },
  { "palavra": "uva", "dicas": ["Cresce em cachos.", "É um ingrediente importante na produção de vinhos."] },
  { "palavra": "coco", "dicas": ["Originária de palmeiras tropicais.", "Além da água, sua polpa e leite são amplamente usados."] },
  { "palavra": "kiwi", "dicas": ["Originário da China.", "A casca não é consumida, mas sua polpa é rica em fibras e vitamina C."] },
  { "palavra": "figo", "dicas": ["Fruto de casca fina e polpa suculenta.", "Consumido fresco ou seco, é uma boa fonte de fibras."] },
  { "palavra": "manga", "dicas": ["Originária do sul da Ásia.", "Existem diversas variedades, cada uma com sabor único."] },
  { "palavra": "jaca", "dicas": ["A maior fruta de árvore do mundo.", "Usada em diversas receitas, de pratos salgados a doces."] }
]
;
  
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
  
