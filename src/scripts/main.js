'use strict';

// Get the list element
const employeeList = document.querySelector('#employees'); // assuming the list has id="employees"

// Helper function: convert salary string to number
function parseSalary(salaryStr) {
  // remove commas and convert to number
  return Number(salaryStr.replace(/,/g, '').trim());
}

// Function to sort list items by salary (descending)
function sortList(list) {
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);
    return salaryB - salaryA; // descending order
  });

  // Append sorted items back to the list
  items.forEach(item => list.appendChild(item));
}

// Function to get array of employee objects
function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map(item => ({
    // Get name from a child element inside the <li>
    name: item.querySelector('.name').textContent.trim(), // assuming <span class="name">John Doe</span>
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

// Call the functions
sortList(employeeList);
const employeesArray = getEmployees(employeeList);

console.log(employeesArray); // to verify result
