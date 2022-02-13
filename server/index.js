import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";

import userRouter from "./src/routers/userRouter";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

export const connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "root1!",
    // password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "test",
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/user', userRouter);

app.get("/isconnect", (req, res) => {
    connection.query("SELECT * FROM Person", (err, rows) => {
        if (err) {
        res.json({
            success: false,
            err,
        });
        } else {
        res.json({
            success: true,
            rows,
            "update": "updated!!!!!"
        });
        }
    });
});
  
app.listen(PORT, () => {
    console.log(`✅ Listening on at http://localhost:${process.env.PORT || 5000}`);
})