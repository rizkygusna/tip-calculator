const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const customTip = document.querySelector('#customTip');
const reset = document.querySelector('#resetButton');

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
  reset.removeAttribute('disabled');
  const percentButton = document.querySelector('.active');
  let percent = null;
  if (percentButton === null) {
    percent = 0;
  } else {
    percent = percentButton.value;
  }
  const numOfPeople = parseInt(people.value);
  const billAmount = parseFloat(bill.value);
  // const percent = percentButton.value;
  const tip = calculateTip(billAmount, percent);

  //calculate & render tip amount per person
  const tipAmountValue = calculateTipPerPerson(numOfPeople, tip);
  //if the value is not a number
  if (isNaN(tipAmountValue)) {
    tipAmount.innerHTML = '$0.00';
  } else {
    tipAmount.innerHTML = `$${tipAmountValue.toFixed(2)}`;
  }

  //calculate & render total bill per person
  const totalBillValue = calculateTotalTip(
    numOfPeople,
    calculateTotalBill(billAmount, tip)
  );
  if (isNaN(totalBillValue)) {
    total.innerHTML = '$0.00';
  } else {
    total.innerHTML = `$${totalBillValue.toFixed(2)}`;
  }
};

//handler for percent buttons
const onClickHandler = (btn) => {
  reset.removeAttribute('disabled');
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
  reset.removeAttribute('disabled');
  const buttons = document.querySelectorAll('.tip-buttons button');
  //remove active state of percent buttons
  for (let button of buttons) {
    //if button class not empty
    if (button.classList != '') {
      //remove active class
      button.classList.toggle('active');
    }
  }

  let percent = customTip.value;
  if (percent === '') {
    percent = 0;
  }
  const numOfPeople = parseInt(people.value);
  const billAmount = parseFloat(bill.value);
  // const percent = percentButton.value;
  const tip = calculateTip(billAmount, percent);

  //calculate & render tip amount per person
  const tipAmountValue = calculateTipPerPerson(numOfPeople, tip);
  if (isNaN(tipAmountValue)) {
    tipAmount.innerHTML = '$0.00';
  } else {
    tipAmount.innerHTML = `$${tipAmountValue.toFixed(2)}`;
  }

  //calculate & render total bill per person
  const totalBillValue = calculateTotalTip(
    numOfPeople,
    calculateTotalBill(billAmount, tip)
  );
  if (isNaN(totalBillValue)) {
    total.innerHTML = '$0.00';
  } else {
    total.innerHTML = `$${totalBillValue.toFixed(2)}`;
  }
};

const resetHandler = () => {
  bill.value = '';
  people.value = '';
  customTip.value = '';
  tipAmount.innerHTML = '$0.00';
  total.innerHTML = '$0.00';
  //reset tip button active state
  const buttons = document.querySelectorAll('.tip-buttons button');
  for (let button of buttons) {
    //if button class not empty
    if (button.classList != '') {
      //remove active class
      button.classList.toggle('active');
    }
  }
  reset.setAttribute('disabled', 'true');
};
