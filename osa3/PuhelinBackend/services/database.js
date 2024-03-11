const mongoose = require('mongoose')

const password = encodeURIComponent("GLAA#sobereny#sepre21")
const url =
  `mongodb+srv://ashtraymilk:${password}@cluster0.ymrzqxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})
const Contact = mongoose.model('Contacts', personSchema)


function getAllPersons() {
    

    let gettingPeople = new Promise((resolve, reject) => {
        let persons = []
        Contact.find({})
        .then(result => {
            result.forEach(person => {
                persons.push(person)
            })

            //console.log(persons)
            resolve(persons)
        })
    })
    return gettingPeople
}
const getPersonWithId = (id) => {

    let gettingPeople = new Promise((resolve, reject) => {
        let foundPerson = {}
        Contact.find({_id: id})
        .then(result => {
            result.forEach(person => {
                console.log(person.id, id)
                if(person.id == id){
                    foundPerson = person
                }
            })

            //console.log(foundPerson)
            if(Object.keys(foundPerson).length !== 0 ){
                console.log("Person with given id was found")
                resolve(foundPerson) 
            }
            else{
                reject("Person with given id was not found")
            }
        })
    })
    return gettingPeople
}

const addPerson = (name, number) => {
    
    const person = new Contact({
        name: name,
        number: number,
    })
    person.save().then(result => {
        console.log('person saved!')
        console.log("result", result)
        return result;
    })
}

const deletePerson = (id) =>{
    
    let gettingPeople = new Promise((resolve, reject) => {
        let foundPerson = {}
        Contact.find({_id: id})
        .then(result => {
            result.forEach(person => {
                console.log(person.id, id)
                if(person.id == id){
                    foundPerson = person
                    resolve(foundPerson)
                }
            })
            //console.log(foundPerson)
            if(Object.keys(foundPerson).length !== 0 ){
                console.log("Person with given id was found")
                Contact.deleteOne({_id: id})
                .then(result => {
                    console.log("successfully deleted one person")
                })
                resolve(foundPerson) 
            }
            else{
                reject("Person with given id was not found")
            }
            
        })
    })
    return gettingPeople
}
const closeConnection = () => {
    mongoose.connection.close()
}

module.exports = {getAllPersons, getPersonWithId, addPerson, deletePerson, closeConnection}