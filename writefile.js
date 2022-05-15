const fs = require('fs');
const customer5 = {
    username: "jeet",
    id: '1119',
    email: "jeetyaduvanshi@gmail.com",
    password: "Po Box City",
}
const jsonString1 = JSON.stringify(customer5)
console.log(jsonString1);
fs.writeFile('./jitu.json', jsonString1, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})