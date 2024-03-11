const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = encodeURIComponent(process.argv[2])
const url =
  `mongodb+srv://ashtraymilk:${password}@cluster0.ymrzqxg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery', false)
mongoose.connect(url)


const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})
const Contact = mongoose.model('Contacts', personSchema)


if(process.argv.length > 4){
    const name = process.argv[3]
    const number = process.argv[4]
    
    const person = new Contact({
        name: name,
        number: number,
    })


    person.save().then(result => {
        console.log('person saved!')
        mongoose.connection.close()
    })

}else{
    console.log("phonebook:")
    Contact.find({}).then(result => {
    result.forEach(person => {
        console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
    })
}



/*
const personSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', personSchema)

const person = new Note({
  content: 'HTML is easy',
  important: true,
})

Note.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })

person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
})
*/