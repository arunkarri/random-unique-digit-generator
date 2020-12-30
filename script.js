let num = '';
let min = 10000000;
let max = 99999999;

function generate() {
  num = '';
  let div = document.getElementById('number');
  generate2();
  div.innerText = num;
}

function generate2() {
  let randNum = Math.floor(Math.random() * (max - min) + min);
  let temp = randNum.toString().split('');
  if (new Set(temp).size != temp.length) {
    generate2();
  } else {
    num = temp.join('');
  }
}

function compare() {
  let dob = document.getElementById('date').value;

  let newDt = new Date(dob);
  let today = new Date();

  let day = Math.round((today.getTime() - newDt.getTime()) / (1000 * 3600 * 24));
  let year = today.getFullYear() - newDt.getFullYear();
  let month = year * 12 + (today.getMonth() - newDt.getMonth());
  let millis = today - newDt;
  let mins = Math.round(millis / (1000 * 60));
  let seconds = Math.round(millis / 1000);
  

  let table = document.getElementById('my-table');
  let tbody = document.getElementById('tbody');
  table.appendChild(tbody);
  let tr = document.createElement('tr');
  tbody.appendChild(tr);


  let td1 = document.createElement('td');
  td1.innerText = day;
  tr.appendChild(td1);

  let td2 = document.createElement('td');
  td2.innerText = year;
  tr.appendChild(td2);

  let td3 = document.createElement('td');
  td3.innerText = month;
  tr.appendChild(td3);

  let td4 = document.createElement('td');
  td4.innerText = mins;
  tr.appendChild(td4);

  let td5 = document.createElement('td');
  td5.innerText = seconds;
  tr.appendChild(td5);

  let td6 = document.createElement('td');
  td6.innerText = millis;
  tr.appendChild(td6);
}
