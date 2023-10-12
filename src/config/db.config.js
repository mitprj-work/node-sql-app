import { createConnection } from 'mysql2';

const dbCon = createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'trainingapp'
});

dbCon.connect(function (err) {
    if (err) throw err;
    console.log("Database connected!");
})

export default dbCon;