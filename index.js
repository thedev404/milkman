// Date function

setInterval(() => {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const d = new Date();
  let day = weekday[d.getDay()];
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let time = d.toLocaleTimeString();

  const dateDiv = document.getElementById("date").innerHTML = `${date}/${month}/${year},`;

  const daySpan = document.getElementById("day").innerHTML = `${day}`;

  const timeDiv = document.getElementById("time").innerHTML = `${time}`;

}, 1000);

// variables
var myInput = document.getElementsByName("myInput");
var totalAmt = document.getElementById("totalAmt");
var items = {
  fcm: 58.3,
  cow: 50.3,
  ltr: 49.3,
  st: 8.5,
  dahi: 14.5,
  tadka: 9,
  plain: 9.5,
  hs: 23,
  hs_local: 21,
  gatu: 9,
  local_badi: 22,
};
// getting all object values
var itemsVal = Object.values(items);

// setting price
const tdPrice = document.getElementsByClassName("tdPrice");
for (let index = 0; index < tdPrice.length; index++) {
  const element = tdPrice[index];
  element.innerHTML = `₹${itemsVal[index]}`;
}

const getData = () => {
  var quantityArr = [];

  // pushing data into quantityArr
  for (var i = 0; i < myInput.length; i++) {
    var a = myInput[i].value;
    quantityArr.push(a);
  }

  // summing up all
  var sum = 0;
  for (var i = 0; i < itemsVal.length; i++) {
    sum += itemsVal[i] * quantityArr[i];
  }

  // adding total into html document
  totalAmt.innerHTML = sum.toFixed(2);

  // Cash tended feature
  // function submit() {
  //   let cashTended = document.getElementById("cash-tended").innerHTML;
  //   let total = totalAmt.innerHTML;
  //   console.log(total);
  //   let bal = (document.getElementById("bal").innerHTML = cashTended - total);
};
