document.getElementById("addmoney-btn").addEventListener("click", () => {
  const bankAccount = getValueFromId("add-money-bank");
  const accountNumber = getValueFromId("bank-account");
  const addAmount = parseInt(getValueFromId("add-amount"));
  const password = getValueFromId("pass");
  const currentBalance = getBalance();
  const newwBalance = currentBalance + addAmount;
  console.log(typeof addAmount);
  if (
    bankAccount == "Select a Bank" ||
    accountNumber.length != 11 ||
    addAmount < 0 ||
    password != "2648"
  ) {
    alert(`please Select a bank ${new Date()}`);
  }
  setBalance(newwBalance);
  const history = document.getElementById("history");
  history.innerHTML += `
  <div class="transaction-card p-5 bg-base-100">
    <p>Add Money success from  ${bankAccount}  to  ${accountNumber} at ${new Date().toLocaleDateString()}</p>
  </div>
`;
});
