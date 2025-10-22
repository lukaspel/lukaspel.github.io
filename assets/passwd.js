const password = "magistras2025";
const userPassword = prompt("Įveskite slaptažodį norėdami pasiekti turinį:");
if (userPassword !== password) {
  document.body.innerHTML = "<h2>Prieiga uždrausta </h2>";
}
