
const mongoose = require('mongoose')

const {PhotoModel}=require('./photo')

mongoose.connect('mongodb+srv://dbRafa:Miisima79@cluster0.0c7htzp.mongodb.net/codenotch2');


// pruebo funcionamiento conexión con Atlas/Compass 
const photo = new PhotoModel({
    user: "Rafael",
    urlPhoto: "https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.117944100.1709942400&semt=ais",
    title: "paisaje1",
    description: "Lago con montañas y nieve"
})

photo.save().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})