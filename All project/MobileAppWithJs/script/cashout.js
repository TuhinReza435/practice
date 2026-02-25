document.getElementById("cashout-btn").addEventListener("click", () => {
  const agentNumber = getValueFromId("agent-number");
  const amount = getValueFromId("amount");
  const pinNumber = getValueFromId("password");
  const currentBalance = getBalance();
  const newBalance = currentBalance - amount;
  console.log(newBalance)
  if (newBalance < 0) {
    alert("Insuffisient Balance");
    return;
  }
  agentNumber === "01735245738" && pinNumber === "2648"
    ? setBalance(newBalance)
    : alert("Invalid pin");




    const history = document.getElementById("history");
    history.innerHTML += `
    <div class="transaction-card p-5 bg-base-100">
    <p>Cashout success Tk ${amount} from  ${agentNumber}  at ${new Date().toLocaleDateString()}</p>
  </div>
  `;
});
