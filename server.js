import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send("Hi Everyone");
})

// Middlewares ========================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route ==============================
import routes from './routes/index.js';
app.use(routes);

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})