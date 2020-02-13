const fs = require("fs");

function createUser(user) {
    const table = fs.readFileSync(`${__dirname}/users.json`, "utf-8");
    let users = [];
    if (table) {
        users = JSON.parse(table);
        users.push(user);
    } else {
        users.push(user);
    }
    fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
}

function getUser(email) {
    const table = fs.readFileSync(`${__dirname}/users.json`, "utf-8");
    const users = JSON.parse(table);
    const thisUser = users.find(user => user.email === email);
    return thisUser;
}

function updateUser(user) {
    const table = fs.readFileSync(`${__dirname}/users.json`, "utf-8");
    const users = JSON.parse(table);
    const thisUserIndex = users.find(user => user.email === email);
    users[thisUserIndex] = user;
    fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
}

module.exports = {
    createUser,
    getUser,
    updateUser,
}
