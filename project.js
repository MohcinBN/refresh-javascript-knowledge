// get the UI vriables
const form = document.querySelector('#employee-form');
const employeeList = document.querySelector('ul.collection-employee');
const removeEmployee = document.querySelector('.delete-all');
const employeeInput = document.querySelector('#full_name');

const deleteItem = document.querySelector('.delete-employee');


console.log(employeeInput);
// evet listners
// e = event

form.addEventListener('submit', addEmployee);



// functions

function addEmployee(e) {
    if (employeeInput.value === '') {
        alert('Please enter the employee name');
    }

    const li = document.createElement('li');
    li.className = 'eployee-item';
    li.appendChild(document.createTextNode(employeeInput.value));

    const link_remove = document.createElement('a');
    link_remove.className = 'button delete-employee';
    link_remove.innerHTML = 'X';
    li.appendChild(link_remove);

    employeeList.appendChild(li);

    form.reset() ;

    e.preventDefault();
}