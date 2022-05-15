// const express = require('express')
// const fs = require('fs')
// const app = express()
// app.use(express.json())


// //get the user data from json file
// function getUserData() {
//     const jsonData = fs.readFileSync('./users.json')
//     return JSON.parse(jsonData)
// }

// //read the user data from json file
// function saveUserData(data) {
//     const stringifyData = JSON.stringify(data)
//     fs.writeFileSync('./users.json', stringifyData)
// }


// app.post('/user/add', (req, res) => {
//     //get the existing user data
//     const existUsers = getUserData()
//         //get the new user data from post request
//     const userData = req.body
//         //     //check if the userData fields are missing
//     if (userData.fullname == null || userData.age == null || userData.username == null || userData.password == null) {
//         return res.status(401).send({ error: true, msg: 'User data missing' })
//     }

//     //check if the username exist already
//     const findExist = existUsers.find(user => user.username === userData.username)

//     console.log(findExist, "999999999");
//     if (findExist) {
//         return res.status(409).send({ error: true, msg: 'username already exist' })
//     }
//     //append the user data
//     existUsers.push(userData)
//         //save the new user data
//     saveUserData(existUsers);
//     res.send({ success: true, msg: 'User data added successfully' })
// });



// /* Read - GET method */
// app.get('/user/list', (req, res) => {
//     const users = getUserData()
//     res.send(users)
// })


// /* Update - Put method */
// app.put('/user/update/:username', (req, res) => {
//     //get the username from url
//     const username = req.params.username
//         //get the update data
//     const userData = req.body
//         //get the existing user data
//     const existUsers = getUserData()
//         //check if the username exist or not       
//     const findExist = existUsers.find(user => user.username === username)
//     if (!findExist) {
//         return res.status(409).send({ error: true, msg: 'username not exist' })
//     }
//     //filter the userdata
//     const updateUser = existUsers.filter(user => user.username !== username)
//     console.log(updateUser, "updateUser");
//     //push the updated data
//     updateUser.push(userData)
//         //finally save it
//     saveUserData(updateUser)
//     res.send({ success: true, msg: 'User data updated successfully' })
// })


// app.delete('/user/delete/:username', (req, res) => {
//     const username = req.params.username
//         //get the existing userdata
//     const existUsers = getUserData()
//         //filter the userdata to remove it
//     const filterUser = existUsers.filter(user => user.username !== username)
//     if (existUsers.length === filterUser.length) {
//         return res.status(409).send({ error: true, msg: 'username does not exist' })
//     }
//     //save the filtered data
//     saveUserData(filterUser)
//     res.send({ success: true, msg: 'User removed successfully' })
// })










// // let aa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12]
// // const updateUser = aa.filter(user => user !== 12)

// // console.log(updateUser);


// //configure the server port
// app.listen(3000, () => {
//     console.log('Server runs on port 3000')
// });