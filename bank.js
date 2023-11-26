


let bank = {
    name: 'Anar',
    money: 200,
    cash: function (amount) {
      this.money += amount;
      updateBalance();
      console.log(`${amount} added to balance. Current balance: ${this.money}`);
    },
    withdraw: function (amount) {
      if (this.money >= amount) {
        this.money -= amount;
        updateBalance();
        console.log(`${amount} withdrawn from balance. Current balance: ${this.money}`);
      } else {
        console.log("Insufficient Azn.");
      }
    },
    showBalance: function () {
      console.log(`User: ${this.name}, Balance: ${this.money}`);
    },
  };

  function updateBalance() {
    document.querySelector('.balance').textContent = `User: ${bank.name}, Balance: ${bank.money}`;
  }

  document.querySelector('.btn-cash').addEventListener('click', function () {
    let amount = parseInt(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
      bank.cash(amount);
    } else {
      alert("Please enter a valid positive number.");
    }
  });

  document.querySelector('.btn-withdraw').addEventListener('click', function () {
    let amount = parseInt(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
      bank.withdraw(amount);
    } else {
      alert("Please enter a valid positive number.");
    }
  });

  updateBalance();