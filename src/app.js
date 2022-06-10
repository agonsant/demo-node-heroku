import express from "express";

export const app = express();

app.get('/hello', (_req,res) => {
    res.send(`Hello World desde express: ${process.env.DEMO_MY_VAR}`);
});


