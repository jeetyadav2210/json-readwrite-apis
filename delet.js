const express = require('express')
const fs = require('fs')
const app = express()
app.use(express.json())


//get the user data from json file
function getUserData() {
    const jsonData = fs.readFileSync('./users.json')
    return JSON.parse(jsonData)
}

app.delete('/user/delete/:username', (req, res) => {
    const username = req.params.username
        //get the existing userdata
    const existUsers = getUserData()
        //filter the userdata to remove it
    const filterUser = existUsers.filter(user => user.username !== username)
    if (existUsers.length === filterUser.length) {
        return res.status(409).send({ error: true, msg: 'username does not exist' })
    }
    //save the filtered data
    saveUserData(filterUser)
    res.send({ success: true, msg: 'User removed successfully' })
})

/
app.listen(3000, () => {
    console.log('Server runs on port 3000')
});