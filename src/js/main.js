import "../css/style.css";

const form = document.querySelector(".tipForm");
const result = document.querySelector(".results");
const tipAmount = result.querySelector("#tip");
const totalAmount = result.querySelector("#total");
const eachPOwes = result.querySelector("#owes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bill = form.bill.value;
  const sharing = form.sharing.value;
  const percentage = form.percentage.value;

  const tip = bill * (percentage / 100);
  const totalBill = parseFloat(bill) + parseFloat(tip);
  const owes = totalBill / sharing;

  tipAmount.innerText = parseFloat(tip);
  totalAmount.innerText = totalBill;
  eachPOwes.innerText = owes;
  form.bill.value = "";
  form.sharing.value = "";
  form.percentage.value = "";
});
