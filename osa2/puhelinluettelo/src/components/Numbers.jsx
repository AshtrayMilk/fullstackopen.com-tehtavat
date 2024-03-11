import phonebookService from '../services/PhonebookService'

const Numbers = ({searchNumber, persons, setPersons}) => {
    const foundPersons = persons.filter(person => 
        person["name"].toLowerCase().includes(searchNumber.toLowerCase())
    )
    const deletePerson = (target) => {
        console.log("target", target)
        if(window.confirm("Do you really wanna delete?")){
            phonebookService
            .deletePerson(target)
            .then(response => {
                console.log("response", response)
                setPersons(persons.filter(person => person["_id"] != target))
        })
        }
        
    } 
    console.log(foundPersons)
    console.log("Doing next the id's")
    return (
        <div className='container'>
            <h1>Numbers</h1>
            <ul>
                {
                    foundPersons.map((person) => {
                        console.log("id", person)
                        return (
                            <li key={person["_id"]} className="note">
                                {person["name"]} {person["number"]}
                                <button onClick={() => deletePerson(person["_id"])}>delete</button>
                            </li>
                        )
                    })
                }
            </ul> 
        </div>
    )
}
export default Numbers