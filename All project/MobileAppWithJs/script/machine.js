function getValueFromId(id) {
  const value = document.getElementById(id).value;
  return value;
}
function getBalance() {
  const currentBalance = parseInt(document.getElementById("balance").innerText);
  return currentBalance;
}
function setBalance(ammount) {
  document.getElementById("balance").innerText = ammount;
}
function showOnly(id) {
  const addmoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const history = document.getElementById("history");
  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");
  history.classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
