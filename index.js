function dataConnection(){
    const connection = mysql. createConnection({
        host: "localhost", 
        PORT: 3306, 
        user: "username", 
        password: "password",
        data: "employee_db"
    })
}