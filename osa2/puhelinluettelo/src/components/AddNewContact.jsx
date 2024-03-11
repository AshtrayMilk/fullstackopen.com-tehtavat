import phonebookService from '../services/PhonebookService'

const AddNewContact = ({
    newName,
    newNumber,
    setNewName,
    setNewNumber,
    persons,
    setPersons,
    addingMessage, 
    setAddingMessage
}) => {
    const updateNewName = (event) => {
        setNewName(event.target.value)
    }
    const updateNewNumber = (event) => {
        setNewNumber(event.target.value)
    }
    const addNewPersonToContacts = (event) => {
        event.preventDefault()
        //check if person is on contacts already
        let isAlreadyOnContacts = false
        persons.map(person =>{
            if(person["name"].toLowerCase() == newName.toLowerCase()){
                isAlreadyOnContacts = true
            }
        })

        if(isAlreadyOnContacts){
            if(window.confirm(`${newName} already added to phonebook, replace the number with a new one?`)){
                let contact = ({"name": newName, "number": newNumber })
                let id = persons.filter(person => person["name"].toLowerCase() == newName.toLowerCase())[0]["_id"]
                console.log("id",id)
                console.log("contact",contact)

                phonebookService
                    .updatePerson(id, contact)
                    .then(response => {
                        console.log("response", response)
                        setPersons(persons.map(person => person["_id"] !== id ? person : response))
                        setNewName("")
                        setNewNumber("")
                })
            }
        }else{
            let contact = ({"name": newName, "number": newNumber })

            console.log("contact",contact)

            phonebookService
                .createPerson(contact)
                .then(response => {
                    console.log("response", response)
                    setPersons(persons.concat(response))
                    setNewName("")
                    setNewNumber("")
            })
        }
        setAddingMessage(`Person has been added/renamed in your contacts`)
        
        setTimeout(() => {
        setAddingMessage(null)
        }, 5000)
        
    }
    return (
        <div className="container">
           <h2>add a new</h2>
           <form onSubmit={addNewPersonToContacts}>
                <div>name: <input onChange={updateNewName}/></div>
                <div>number: <input onChange={updateNewNumber}/></div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}
export default AddNewContact
