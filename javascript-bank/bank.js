/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (typeof balance === 'number' && balance > 0 && Math.floor(balance) === balance) {
    const acnt = new Account(this.nextAccountNumber, holder);
    acnt.deposit(balance);
    this.accounts.push(acnt);
    this.nextAccountNumber++;
    return acnt.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (const el of this.accounts) {
    if (el.number === number) {
      return el;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  let total = 0;
  if (this.accounts.length) {
    for (const el of this.accounts) {
      total += el.getBalance();
    }
  }
  return total;
};
