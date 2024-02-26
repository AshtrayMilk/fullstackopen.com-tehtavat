const AddNewContact = ({
    newName,
    newNumber,
    setNewName,
    setNewNumber,
    persons,
    setPersons
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
            alert(`${newName} already added to phonebook`)
        }else{
            let updatedContacts = persons
            updatedContacts.push({"name": newName, "number": newNumber})
            console.log(updatedContacts)
            setPersons[updatedContacts] 
        }
        
    }
    return (
        <div>
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
