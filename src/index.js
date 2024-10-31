const express = require("express")
const mongoose = require('mongoose');

const app = express()
const port = 3000
app.use(express.json())

const Film = mongoose.model('Film', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String
});

app.get("/", (req, res) => {
    res.send("Hello, world")
})

app.post("/", async (req, res) => {
    const film = new Film({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    })
    await film.save()
    res.send(film)
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://riansouzasantosdesenvolvedor:ss123456@api-starwars.ndsfn.mongodb.net/?retryWrites=true&w=majority&appName=api-starwars');
    console.log("App running")
})