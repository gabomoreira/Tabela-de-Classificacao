function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
  }

  var jogadores = [];
  
function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
      elemento += `<tr><td id="foto"><img src=${jogadores[i].foto}></td>`;
      elemento += `<td>${jogadores[i].nome}</td>`;
      elemento += `<td>${jogadores[i].vitorias}</td>`;
      elemento += `<td>${jogadores[i].empates}</td>`;
      elemento += `<td>${jogadores[i].derrotas}</td>`;
      elemento += `<td>${jogadores[i].pontos}</td>`;
      elemento += `<td><button id="vitoria" onClick="adicionarVitoria(${i})">Vitória</button></td>`;
      elemento += `<td><button id="empate" onClick="adicionarEmpate(${i})">Empate</button></td>`;
      elemento += `<td><button id="derrota" onClick="adicionarDerrota(${i})">Derrota</button></td>`;
      elemento += `</tr>`;
    }
  
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}
  exibeJogadoresNaTela(jogadores);
  
function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}
  
function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}
  
function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}
  
function adicionarNovoJogador(jogadores) {
    var nomeJogador = document.getElementById("nomeNovoJogador").value;
    var fotoJogador = document.getElementById("fotoNovoJogador").value;
    var jogador = {
      foto: fotoJogador,
      nome: nomeJogador,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
    
    jogadores.push(jogador);
    exibeJogadoresNaTela(jogadores);
  
    document.getElementById("nomeNovoJogador").value = "";
    document.getElementById("fotoNovoJogador").value = "";
}
function resetarPontos(jogadores) {
    for (i = 0; i < jogadores.length; i++) {
      jogadores[i].vitorias = 0;
      jogadores[i].empates = 0;
      jogadores[i].derrotas = 0;
      jogadores[i].pontos = 0;
      exibeJogadoresNaTela(jogadores);
    }
}
  