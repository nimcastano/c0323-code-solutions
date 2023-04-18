/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (typeof amount === 'number' && amount > 0 && Math.floor(amount) === amount) {
    const obj = new Transaction('deposit', amount);
    this.transactions.push(obj);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (typeof amount === 'number' && amount > 0 && Math.floor(amount) === amount) {
    const obj = new Transaction('withdrawal', amount);
    this.transactions.push(obj);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  let balance = 0;
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
