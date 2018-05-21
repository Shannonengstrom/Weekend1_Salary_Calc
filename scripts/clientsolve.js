// high level notes: 
//function should only do one thing






console.log( ' in clientsolve.js'); 

const employeeArray = [];
// only thing you can't do with const is change it to another thing such as a string or a number. Let allows you to do that. 


// this is the fast way - the more clear way is to call a function direxctly//
//this way will run any function//
// $(document).ready(function(){
//     console.log( 'jquery is ready' ); 
// }); 


//clearer version//
$(document).ready( readyNow ); {
    console.log( 'jquery is ready' ); 
}

function readyNow(){
    //click handler - something to run on the click 
    $("#submitButton").on('click', handleClick); 
    }
    //other events that can happen - mouseover, mouseon, etc.//

    function handleClick(){ 
        console.log( 'click!');
        //get value of handle called and declaire const firstName
        // val always returns a string
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const idNumber = $('#idNumber').val();
        const title = $('#title').val();
        const salary = $('#salary').val();
        //at this point make a global variable (see above)
       
       
       // V1 using objects
    //     const employee = {
    //         //items on left are the keyname 
    //         firstName : firstName, 
    //         lastName : lastName, 
    //         idNumber : idNumber, 
    //         title : title, 
    //         salary : salary, 
    // }
        //V2 using classes!
     const employee = new Employee(firstName, lastName, idNumber, title, salary);
        console.log( 'in employee declaring new Employee class', employee);


    employeeArray.push(employee);
        console.log('Employee Array', employeeArray);

        appendEmployees(); 
    }

function appendEmployees() {
    clearTable(); 
    let yearlyCosts = 0; 
    // for (const iterator of object)
    //best practice to redeclare const because it shows that it is different than anything else in the cofe
    for (const employee of employeeArray) {

        yearlyCosts += parsInt(employee.salary);

        // make an html template
        // concatinate all of the values for the row
        // V1 const tableRow = '<tr><td>' + employee.firstName + '</td></td>' 
        // for this version - it asks jQuery to evaluate what is within the curly braces - this is new for ES6
        const tableRow = `<tr>
                            <td>${employee.firstName}</td>
                            <td>${employee.lastName}</td>
                            <td>${employee.idNumber}</td>
                            <td>${employee.title}</td>
                            <td>${employee.salary}</td>
                            </tr>`
        $('#tableTarget').append(tableRow);
        //at this point we are putting this to the array and the DOM, but not clearing the array. 
        //next step is to empty
    }
}



        ///instructions for above
        // append to DOM!
            //loop through the array to get the employee
            //make an html template - throw a row onto the DOM with employee data
        // push employee in array to the HTML


    class Employee {
        constructor (firstName, lastName, idNumber, title, salary) {
        // this means the current context in which you are - or what scope you are in. For example: "For this Employee with firstName, add their first name)" 
            this.firstName = firstName; 
            this.lastName = lastName; 
            this.idNumber = idNumber, 
            this.title = title;
            this.salary = salary;
        }
    }


    
    function clearTable(){
        // both options work below but empty makes more sense. 
        $('#tableTarget').empty();
        $('#firstName').val();
        $('#lastName').val();
        $('#idNumber').val();
        $('#title').val();
        $('#salary').val();
        // $('#tableTarget').val( '' );
    }
    
    function clearInputs() {
        // both options work below but empty makes more sense. 
        $('#tableTarget').val('');
        $('#firstName').val('');
        $('#lastName').val('');
        $('#idNumber').val('');
        $('#title').val('');
        $('#salary').val('');
    
    }
        

// MY VERSION

// console.log ( 'in client.js');

// $( document ).ready( readyNow );

// class Employee{
//     constructor( firstName, lastName, id, title, annualSalary){
//         this.firstName = firstName; 
//         this.lastName = lastName; 
//         this.id = id; 
//         this.title = title; 
//         this.annualSalary = annualSalary; 
//     } // end constructor
// } // end Employee class

// let employees = [];

// function readyNow(){
//     console.log( 'in readyNow' );
//     $( '#addButton' ).on( 'click', addEmployee);
//     // addModeGo();
// } // end readyNow

// function addEmployee() {
//     console.log( 'in addEmployee'); 
//     // get user input
//     // make a new Employee from input
//     let newEmployee = new Employee( $( '#firstNameIn').val(), $( '#lastNameIn').val(), $( '#idIn').val(), $( '#titleIn').val(), $( '#annualSalaryIn').val() );
//     // push new Employee to employees array
//     employees.push( newEmployee ); 
//     console.log( employees ); 
//     // update DOM with new Employee
//     displayEmployees();
//     // call function to display monthlyTotal
//     monthlyTotal(); 
//     // Clear input fields after click of button - reset to placeholder text
//     $( '#firstNameIn').val('');
//     $( '#lastNameIn').val('');
//     $( '#idIn').val('');
//     $( '#titleIn').val('');
//     $( '#annualSalaryIn').val(''); 
//     // check if above 20,000 - run changeToRed function 
//     // changeToRed(); 
// } // end addEmployee

// function displayEmployees() {
//     console.log( 'in displayEmployees' );
//     // target output element and save in variable 
//     let el = $( '.employeesOut');
//     // empty the output element
//     el.empty(); 
//     // loop through array employees
//     for( newEmployee of employees){
//         //append each employee to the DOM
//         let outputString = '<tr>';
//             outputString += '<td>' + newEmployee.firstName + '</td>';
//             outputString += '<td>' + newEmployee.lastName + '</td>';
//             outputString += '<td>' + newEmployee.id + '</td>';
//             outputString += '<td>' + newEmployee.title + '</td>';
//             outputString += '<td>' + newEmployee.annualSalary + '</td>';
//             outputString += '</tr>';
//         el.append( outputString);
//         }
// } // end displayEmployees

// function monthlyTotal(){
//     console.log( 'in monthlyTotal');
//     // set sum 
//     let sum = 0;
//     // run for loop 
//     for( newEmployee of employees){
//     // Increase sum from 0 for newEmployee's annual salary / 12 to get monthly
//         sum += Number(newEmployee.annualSalary)/12;
//     };
//     console.log(sum);
//     // clear totalOutput after each time 
//         $( '.totalOutput').empty();
//     // append output each time 
//         $( '.totalOutput').append( '<div>Total Monthly: $' + sum + '</div>');
//     if (sum >= 20000) {
//         $('.totalOutput').toggleClass('red');
//     }
//     else {
//     console.log('false');
//     }
// return sum; 
// }

// // function changeToRed(){
// //     console.log('in ChangeToRed')
