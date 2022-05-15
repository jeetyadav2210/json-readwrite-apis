const fs = require('fs');
const customer5 = {
    username: "jeet",
    id: '1119',
    email: "jeetyaduvanshi@gmail.com",
    password: "jitu@12345",
}
const jsonString1 = JSON.stringify(customer5)
console.log(jsonString1);
fs.update('./jitu.json', jsonString1, err => {
    if (err) {
        console.log('Error update file', err)
    } else {
        console.log('Successfully update file')
    }
})