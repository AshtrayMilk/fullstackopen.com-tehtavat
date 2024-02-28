const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
mongoose.set('strictQuery', false)


const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})
const Person = mongoose.model('Person', personSchema)


const showAllPersons = () => {

}
const showPerson = () => {

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
    
}

}else{
    console.log("phonebook:")
    Person.find({}).then(result => {
    result.forEach(person => {
        console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
    })
}











export default {}