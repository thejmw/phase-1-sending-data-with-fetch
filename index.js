// Add your code here
const body = document.getElementsByTagName('body')[0];

function submitData(firstName, email){
    const configObject = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
    body: JSON.stringify({
        'name': firstName,
        'email': email
        })
    };
return fetch('http://localhost:3000/users', configObject)
.then (response => response.json())
.then (body => addNewContact(body.id))
.catch (function (error){
    let message = 'Unauthorized Access';
    alert('Unauthorized Access');
    document.body.innerHTML = error.message
});
}

function addNewContact(newID){
    document.getElementsByTagName('body')[0].innerHTML = newID;
}

function errorFunc(error) {
    document.body.innerHTML = error.message
}

submitData('Name', 'name@name.com')

