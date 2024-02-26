import { useState, useEffect} from 'react'
import axios from 'axios'
import AddNewContact from './AddNewContact'
import Numbers from './Numbers'
import Phonebook from './Phonebook'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [searchNumber, setSearchNumber] = useState('')

  useEffect(() => {    
    console.log('effect')    
    axios      
      .get('http://localhost:3001/persons')      
      .then(response => {        
        console.log('promise fulfilled')        
        setPersons(response.data)      
      })  
  }, [])  
  console.log('render', persons.length, 'notes')


  return (
    <div>
      <Phonebook 
        setSearchNumber={setSearchNumber}
      />
      <AddNewContact
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />
      <Numbers
        searchNumber={searchNumber}
        persons={persons}
      />
    </div>
  )

}

export default App