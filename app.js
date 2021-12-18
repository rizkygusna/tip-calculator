const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const customTip = document.querySelector('#customTip');

const tipAmount = document.querySelector('.amount-number');
const total = document.querySelector('.total-number');

//calculate bill * tip in %
const calculateTip = (bill, percent = 0) => {
  return (bill * percent) / 100;
};

//calculate total bill including tip
const calculateTotalBill = (bill, tip) => {
  return bill + tip; //163.93
};

//calculate total tip
const calculateTotalTip = (numOfPeople = 1, totalBill) => {
  return totalBill / numOfPeople;
};

//calculate tip per person
const calculateTipPerPerson = (numOfPeople = 1, tip) => {
  return tip / numOfPeople;
};

const onChangeHandler = () => {
  const numOfPeople = people.value;
  const billAmount = bill.value;
  const percent = 15;
  const tipAmountValue = calculateTipPerPerson(
    numOfPeople,
    calculateTip(billAmount, percent)
  );
  tipAmount.innerHTML = `$ ${tipAmountValue}`;
};
