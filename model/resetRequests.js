const fs = require("fs");

function createResetRequest(resetRequest) {
    const table = fs.readFileSync(`${__dirname}/resetRequests.json`, "utf-8");
    let requests = [];
    if (table) {
        requests = JSON.parse(table);
        requests.push(resetRequest);
    } else {
        requests.push(resetRequest);
    }
    fs.writeFileSync(`${__dirname}/resetRequests.json`, JSON.stringify(requests));
}

function getResetRequest(id) {
    const table = fs.readFileSync(`${__dirname}/resetRequests.json`, "utf-8");
    const requests = JSON.parse(table);
    const thisRequest = requests.find(req => req.id === id);
    return thisRequest;
}

module.exports = {
    createResetRequest,
    getResetRequest,
}
