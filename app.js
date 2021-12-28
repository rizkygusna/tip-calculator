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
  const percentButton = document.querySelector('.active');
  let percent = null;
  if (percentButton === null) {
    percent = 0;
  } else {
    percent = percentButton.value;
  }
  console.log(percent);
  const numOfPeople = parseInt(people.value);
  const billAmount = parseFloat(bill.value);
  // const percent = percentButton.value;
  const tip = calculateTip(billAmount, percent);

  //calculate & render tip amount per person
  const tipAmountValue = calculateTipPerPerson(numOfPeople, tip);
  tipAmount.innerHTML = `$ ${tipAmountValue.toFixed(2)}`;

  //calculate & render total bill per person
  const totalBillValue = calculateTotalTip(
    numOfPeople,
    calculateTotalBill(billAmount, tip)
  );
  total.innerHTML = `$${totalBillValue.toFixed(2)}`;
};

//handler for percent buttons
const onClickHandler = (btn) => {
  const buttons = document.querySelectorAll('.tip-buttons button');
  for (let button of buttons) {
    //if button class not empty
    if (button.classList != '') {
      //remove active class
      button.classList.toggle('active');
    }
  }
  btn.classList.toggle('active');
  onChangeHandler();
};

//handler for custom percent value
const customHandler = () => {
  const buttons = document.querySelectorAll('.tip-buttons button');
  //remove active state of percent buttons
  for (let button of buttons) {
    //if button class not empty
    if (button.classList != '') {
      //remove active class
      button.classList.toggle('active');
    }
  }

  let percent = null;
  percent = customTip.value;
  console.log(percent);
  const numOfPeople = parseInt(people.value);
  const billAmount = parseFloat(bill.value);
  // const percent = percentButton.value;
  const tip = calculateTip(billAmount, percent);

  //calculate & render tip amount per person
  const tipAmountValue = calculateTipPerPerson(numOfPeople, tip);
  tipAmount.innerHTML = `$ ${tipAmountValue.toFixed(2)}`;

  //calculate & render total bill per person
  const totalBillValue = calculateTotalTip(
    numOfPeople,
    calculateTotalBill(billAmount, tip)
  );
  total.innerHTML = `$${totalBillValue.toFixed(2)}`;
};
