
const mongoose = require('mongoose')

const {PhotoModel} = require('./photo')

mongoose.connect('mongodb+srv://dbRafa:Miisima79@cluster0.0c7htzp.mongodb.net/codenotch2');


const photoUser1 = new PhotoModel({
    user: "Rafael",
    urlPhoto: "https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.117944100.1709942400&semt=ais",
    title: "paisaje223",
    description: "Lago con montañas y nieve"
})

const photoUser2 = new PhotoModel({
    user: "Carlos",
    urlPhoto: "https://estaticos-cdn.prensaiberica.es/clip/664a2eaa-fc93-436c-9198-8fea743cbd5f_alta-aspect-ratio_default_0.jpg",
    title: "paisaje224",
    description: "Cascada con valle verde"
})


// FUNCIONES QUE PIDE EL RETO: (LAS COMENTO PARA PODER LANZAR UNA A UNA)


//Subida de fotos dados los usuarios:
PhotoModel.insertMany([photoUser1, photoUser2])
    .then(res => {
        console.log('Documento guardado correctamente:', res);
        mongoose.disconnect();
    }).catch(err => {
        console.log(err)
    })


//Dado un usuario obtener todas sus fotos:
// PhotoModel.find({ user: 'Carlos' })
//     .then(res => {
//         console.log(res);
//         mongoose.disconnect();
//     }).catch(err => {
//         console.log(err)
//     })


// Dado el titulo de una foto y una descripción modificar su descripción.
// PhotoModel.updateMany({"$and": [{title: "paisaje342"}, {description: "Cascada con valle verde2"}]}, {description: "nueva descripción"})
//     .then(res => {
//         console.log(res);
//         mongoose.disconnect();
//     }).catch(err => {
//         console.log(err)
//     })


//  Dado un usuario y un titulo de foto eliminar su foto.
// PhotoModel.deleteOne({"$and": [{user: "Rafael"}, {description: "Lago con montañas y nieve2"}]})
//     .then(res => {
//         console.log(res);
//         mongoose.disconnect();
//     }).catch(err => {
//         console.log(err)
//     })


// Dado un usuario eliminar todas sus fotos.
// PhotoModel.deleteMany({ user: 'Carlos' })
//     .then(res => {
//         console.log(res);
//         mongoose.disconnect();
//     }).catch(err => {
//         console.log(err)
//     })