const inquirer = require("inquirer")
const queries = require("queries")



function startTracking(){
    inquirer.prompt
}


function dataConnection(){
    const connection = mysql. createConnection({
        host: "localhost", 
        PORT: 3306, 
        user: "emilycassel77@gmail.com", 
        password: "password",
        data: "rutgers"
    })
    
connection.connect((err) => {
    if(err) throw err;

    module.exports = connection;

})

}


dataConnection();