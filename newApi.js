const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())


//get the user data from json file
function getUserData() {
    const jsonData = fs.readFileSync('./users.json')
    return JSON.parse(jsonData)
}

//read the user data from json file
function saveUserData(data) {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('./users.json', stringifyData)
}


app.post('/user/add', (req, res) => {
    //get the existing user data
    const existUsers = getUserData()
        //get the new user data from post request
    const userData = req.body
        //     //check if the userData fields are missing
    if (userData.fullname == null || userData.age == null || userData.username == null || userData.password == null) {
        return res.status(401).send({ error: true, msg: 'User data missing' })
    }

    //check if the username exist already
    const findExist = existUsers.find(user => user.username === userData.username)

    console.log(findExist, "999999999");
    if (findExist) {
        return res.status(409).send({ error: true, msg: 'username already exist' })
    }
    //append the user data
    existUsers.push(userData)
        //save the new user data
    saveUserData(existUsers);
    res.send({ success: true, msg: 'User data added successfully' })
});
//configure the server port
app.listen(3000, () => {
    console.log('Server runs on port 3000')
});