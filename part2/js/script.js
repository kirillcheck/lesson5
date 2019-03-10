// кнопка расчета бюджета
let button = document.getElementById('start');
console.log(button);
// кнопка расчета бюджета


//Получить все блоки в правой части программы через классы
let budgetValue = document.getElementsByClassName('budget-value');
console.log(budgetValue[0]);

let daybudgetValue = document.getElementsByClassName('daybudget-value');
 console.log(daybudgetValue[0]);

 let levelValue = document.getElementsByClassName('level-value');
 console.log(levelValue[0]);

 let expensesValue = document.getElementsByClassName('expenses-value');
 console.log(expensesValue[0]);

 let incomeValue = document.getElementsByClassName('income-value');
 console.log(incomeValue[0]);

 let monthSavingsValue = document.getElementsByClassName('monthsavings-value');
 console.log(monthSavingsValue[0]);

 let yearSavingsValue = document.getElementsByClassName('yearsavings-value');
 console.log(yearSavingsValue[0]);

 


//Получить все блоки в правой части программы через классы




//  Получение поля(input) c обязательными расходами через класс expenses-item
let expensesInput = document.getElementsByClassName('expenses-item');
console.log(expensesInput[0]);
console.log(expensesInput[1]);
console.log(expensesInput[2]);
console.log(expensesInput[3]);
//  Получение поля(input) c обязательными расходами через класс expenses-item


//   Получить кнопки
let buttonApprove = document.getElementsByTagName('button');
console.log(buttonApprove[0]);
console.log(buttonApprove[1]);
console.log(buttonApprove[2]);
//   Получить кнопки


//   Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optionalexpenses = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalexpenses[0]);
console.log(optionalexpenses[1]);
console.log(optionalexpenses[2]);
//   Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll


//   Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let yearInput = document.querySelector('.year-value');
console.log(yearInput);

let monthValue = document.querySelector('.month-value');
console.log(monthValue);

let dayValue = document.querySelector('.day-value');
console.log(dayValue);

let chooseIncome = document.querySelector('.choose-income');
console.log(chooseIncome);
let sum = document.querySelector('.choose-sum');
console.log(sum); 

let percent = document.querySelector('.choose-percent');
console.log(percent); 

let checkBox = document.querySelector('#savings');
console.log(checkBox); 


//   Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)