var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block"; // Abre o modal
}

span.onclick = function() {
  modal.style.display = "none"; // Fecha o modal
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Fecha ao clicar fora
  }
}