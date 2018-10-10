// Your scripts here

//calculate button
const calculate = document.getElementById('calculate');

//bill amount
const amount = document.getElementById('amount');

//tip percentage
const percent = document.getElementById('percent');

//number of people
const people = document.getElementById('numberOfPeople');

//tip display
const tip = document.getElementById('tip');

//total amount
const total = document.getElementById('total');

//each amount
const totalper = document.getElementById('totalper');

//each tip
const tipper = document.getElementById('tipper')

let tipamount = 0;

let totalamount = 0;

let amounteach = 0;

let tipeach = 0;

calculate.onclick = (e) =>
{
    const billz = amount.value;

    const tipz = percent.value/100;

    const peopler = people.value;

    tipamount = billz * tipz;

    totalamount = +tipamount + +billz;

    amounteach = totalamount / peopler;

    tipeach = tipamount / peopler;

    tip.innerHTML = tipamount.toFixed(2);

    total.innerHTML = totalamount.toFixed(2);

    totalper.innerHTML = amounteach.toFixed(2);

    tipper.innerHTML = tipeach.toFixed(2);



}
