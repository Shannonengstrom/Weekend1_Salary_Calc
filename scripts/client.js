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
    $( '#addButton' ).on( 'click', addEmployee );
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
} // end addEmployee


function displayEmployees() {
    console.log( 'in displayEmployees' );
    // target output element and save in variable 
    let el = $( '#employeesOut');
    // empty the output element
    el.empty(); 
    // loop through array employees
    for( employee of employees){
        //append each employee to the DOM
        let outputString = '<div class="col-2.5">';
            outputString = '<div class="card-header">"First Name"</div>';
            outputString = '<div class="card-body">' + employee.firstname + '</div>';
            outputString = '<div class="card-header">' + employee.firstname + '</div>';
            outputString = '<div class="card-header">' + employee.firstname + '</div>';
            outputString = '<div class="card-header">' + employee.firstname + '</div>';

        }

}