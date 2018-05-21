console.log ( 'in client.js');

$( document ).ready( readyNow );

class Employee{
    constructor( firstName, lastName, id, title, annualSalary){
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.id = id; 
        this.title = title; 
        this.annualSalary = annualSalary; 
    } // end constructor
} // end Employee class

let employees = [];

function readyNow(){
    console.log( 'in readyNow' );
    $( '#addButton' ).on( 'click', addEmployee);
    // addModeGo();
} // end readyNow

function addEmployee() {
    console.log( 'in addEmployee'); 
    // get user input
    // make a new Employee from input
    let newEmployee = new Employee( $( '#firstNameIn').val(), $( '#lastNameIn').val(), $( '#idIn').val(), $( '#titleIn').val(), $( '#annualSalaryIn').val() );
    // push new Employee to employees array
    employees.push( newEmployee ); 
    console.log( employees ); 
    // update DOM with new Employee
    displayEmployees();
    // call function to display monthlyTotal
    monthlyTotal(); 
    // Clear input fields after click of button - reset to placeholder text
    $( '#firstNameIn').val('');
    $( '#lastNameIn').val('');
    $( '#idIn').val('');
    $( '#titleIn').val('');
    $( '#annualSalaryIn').val(''); 
} // end addEmployee

function displayEmployees() {
    console.log( 'in displayEmployees' );
    // target output element and save in variable 
    let el = $( '.employeesOut');
    // empty the output element
    el.empty(); 
    // loop through array employees
    for( newEmployee of employees){
        //append each employee to the DOM
        let outputString = '<tr>';
            outputString += '<td>' + newEmployee.firstName + '</td>';
            outputString += '<td>' + newEmployee.lastName + '</td>';
            outputString += '<td>' + newEmployee.id + '</td>';
            outputString += '<td>' + newEmployee.title + '</td>';
            outputString += '<td>' + newEmployee.annualSalary + '</td>';
            outputString += '</tr>';
        el.append( outputString);
        }
} // end displayEmployees

function monthlyTotal(){
    console.log( 'in monthlyTotal');
    // set sum 
    let sum = 0;
    // run for loop 
    for( newEmployee of employees){
    // Increase sum from 0 for newEmployee's annual salary / 12 to get monthly
        sum += Number(newEmployee.annualSalary)/12;
    };
    console.log(sum);
    // clear totalOutput after each time 
        $( '#totalOutput').empty();
    // append output each time 
        $( '#totalOutput').append( '<div>Total Monthly: $' + sum + '</div>');
return sum; 
}