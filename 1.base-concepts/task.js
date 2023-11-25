"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  let x1;
  let x2;

  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let annualPercentage = percent / 100;
  let loanBody = amount - contribution;
  let monthlyPercentage = annualPercentage / 12;
  let monthlyPayment = loanBody * (monthlyPercentage + (monthlyPercentage / (((1 + monthlyPercentage) ** countMonths) - 1)));
  let total = (monthlyPayment * countMonths).toFixed(2);
  return Number(total)
}
