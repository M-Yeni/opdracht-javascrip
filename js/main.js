let dataArray = [];


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const age = document.getElementById('age').value;

    
    if (firstName && lastName && age) {
       
        const person = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        dataArray.push(person);

        
        displayData();
        
       
        document.getElementById('myForm').reset();
    } else {
        alert('Vul alle velden in.');
    }
});

function displayData() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; 

    
    dataArray.forEach((person, index) => {
        outputDiv.innerHTML += `<p>${index + 1}. ${person.firstName} ${person.lastName}, Age: ${person.age}</p>`;
    });
}