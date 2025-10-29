
let transactions = [];

function addTransaction(){
  const name = document.getElementById('name').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  const date = document.getElementById('date').value;

  if(!name || !amount || !date){
    alert('Please fill all fields');
    return;
  }

  const transaction = { name, amount, category, date };
  transactions.push(transaction);
  displayTransactions();
  clearFields();
}

document.getElementById('addBtn').addEventListener('click', addTransaction);

function displayTransactions(){
  const tbody = document.querySelector('#ExpesnesTable tbody');
  tbody.innerHTML = '';
  let total = 0;

  transactions.forEach((t, index) => {
    total += t.amount;
    const row = `<tr>
      <td>${t.name}</td>
      <td>₹${t.amount.toFixed(2)}</td>
      <td>${t.category}</td>
      <td>${t.date}</td>
      <td><button onclick="Expenses(${index})">Delete</button></td>
    </tr>`;
    tbody.innerHTML += row;
  });

  document.getElementById('total').innerText = total.toFixed(2);
}

function deleteExpenses(index){
  transactions.splice(index,1);
  displayExpenses();
}

function clearFields(){
  document.getElementById('name').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('category').value = 'Income';
  document.getElementById('date').value = '';
}

const monthYearEl = document.getElementById('monthYear');
const now = new Date();
const options = { month: 'long', year: 'numeric' };
monthYearEl.textContent = now.toLocaleDateString('en-US', options);
