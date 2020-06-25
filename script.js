import { usersAcademlo } from './users.js'

function printUsers(users) {
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = ''
    users.forEach((user, index) => {
        tableBody.innerHTML += `<tr>
                                <th>${index + 1}</th>
                                <td>${user.name}</td>
                                <td>${user.lastname}</td>
                                <td>${user.email}</td>
                                <td>
                                    <button onclick="removeUser(${index})" class='btn btn-danger'>Eliminar</button>
                                </td>
                            </tr>`

    })
}
function addUser() {
    const nameInput = document.getElementById('name')
    const lastname = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const genderInput = document.getElementById('gender')
    const newUser = {
        name: nameInput.value,
        lastname: lastname,
        email: email,
        genderInput: gender.value
    }
    usersAcademlo.unshift(newUser)
    printUsers(usersAcademlo)
    nameInput.value = ''
    genderInput.value = 'male'
}
// Filter
function filter() {
    const filter = document.getElementById('filter').value

    switch(filter) {
        case 'academlo':
          printAcademloUsers()
          break;
        case 'female':
            printByGender('female')
          break;
        case 'sort':
            printSortedByName()
            break;
        case 'male':
            printByGender('male')
            break;
        default:
            alert('No entro a ningún caso')
         
      }
    
}
function printByGender(filter) {
    const filteredUsers = usersAcademlo.filter(function(user) {
        return user.gender == filter
    })
    printUsers(filteredUsers)
}

function printAcademloUsers() {
    const filteredUsers = usersAcademlo.filter(function(user) {
        return user.email.endsWith("@academlo.com")
    })
    printUsers(filteredUsers)
}
function printSortedByName() {
    usersAcademlo.sort((a, b) => {
        return a.name > b.name ? 1 : -1
    })
    printUsers(usersAcademlo)
}

// Para eliminar los usuarios

function removeUser(index) {
    usersAcademlo.splice(index, 1)
    printUsers(usersAcademlo)
}



window.addUser = addUser
window.printByGender = printByGender
window.removeUser = removeUser
window.filter = filter


printUsers(usersAcademlo)