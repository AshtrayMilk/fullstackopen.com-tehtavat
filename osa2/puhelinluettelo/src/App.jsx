import { useState, useEffect} from 'react'
import axios from 'axios'
import AddNewContact from './AddNewContact'
import Numbers from './Numbers'
import Phonebook from './Phonebook'

const App = () => {

  const [persons, setPersons] = useState([
    
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
        setPersons={setPersons}
      />
    </div>
  )

}

export default App