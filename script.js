function adicionarFilme() {
  var campoFilmeFavorito = document.getElementById("filme").value;
  if (campoFilmeFavorito.endsWith(".jpg")) {
    var elementoFilmeFavorito = "<img src=" + campoFilmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  } else {
    console.error("Opá! endereço de filme invalido, verificar se ela é .jpg");
  }

  document.getElementById("filme").value = "";
}
