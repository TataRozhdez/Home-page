const btn = document.getElementById('signButton');
const modal = document.getElementById('signModal');
const exit = document.getElementById('close');

btn.onclick = function() {
  modal.style.display = "flex";
}
exit.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}