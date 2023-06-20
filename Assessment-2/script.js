let form = document.getElementById("formSubmission");
let table = document.getElementById('data');
let totalAmount = document.getElementById('totalAmount');

form.addEventListener("submit", (element) => {
  element.preventDefault();
  submit();
})

const submit = () => {
  let name = document.getElementById("name").value;
  let bank = document.getElementById("bank").value;
  let amount = document.getElementById("amount").value;

  let newRow = table.insertRow(); // new row

  let nameCell = newRow.insertCell(0); 
  nameCell.innerHTML = name;

  let bankCell = newRow.insertCell(1);
  bankCell.innerHTML = bank;

  let amountCell = newRow.insertCell(2);
  amountCell.innerHTML = amount;

  let deleteCell = newRow.insertCell(3); //adding delete button 
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", function() {
    deleteRow(this);
  });
  deleteCell.appendChild(deleteButton); //adding to row

  updateTotalAmount();

  form.reset();
}
//deleting row
const deleteRow = (button) => {
  let row = button.parentNode.parentNode; //to select entire row td and tr
  table.deleteRow(row.rowIndex); 
  updateTotalAmount();
}
//total amount
const updateTotalAmount = () => {
  let total = Array.from(table.rows).slice(1).reduce((sum, row) => { // accumulator set to 0
    let amount = parseFloat(row.cells[2].innerHTML);
    return sum + amount;
  }, 0);
  totalAmount.innerHTML = total;
}
