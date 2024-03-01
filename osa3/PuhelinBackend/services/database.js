const mongoose = require('mongoose')

const password = encodeURIComponent("GLAA#sobereny#sepre21")
const url =
  `mongodb+srv://ashtraymilk:${password}@cluster0.ymrzqxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery', false)
mongoose.set('strictQuery', false)


const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})
const Person = mongoose.model('Person', personSchema)


function getAllPersons() {
    mongoose.connect(url)

    let gettingPeople = new Promise((resolve, reject) => {
        let persons = []
        Person.find({})
        .then(result => {
            result.forEach(person => {
                persons.push(person)
            })
            mongoose.connection.close()
            //console.log(persons)
            resolve(persons)
        })
    })
    return gettingPeople
}
const showPerson = () => {
    return 0
}
const addPerson = (name, number) => {
    
    mongoose.connect(url)
    const person = new Person({
        name: name,
        number: number,
    })

    person.save().then(result => {
        console.log('person saved!')
        mongoose.connection.close()
    })
}
const deletePerson = () =>{
    return 0
}

module.exports = {getAllPersons, showPerson, addPerson, deletePerson}