import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send("Hi Everyone");
})

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})