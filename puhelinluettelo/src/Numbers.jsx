const Numbers = ({searchNumber, persons}) => {
    const foundPersons = persons.filter(person => 
        person["name"].toLowerCase().includes(searchNumber.toLowerCase())
    )
    console.log(foundPersons)
    return (
        <div>
            <h1>Numbers</h1>
            <ul>
                {
                    foundPersons.map((person, index) =>
                        <li key={index+person["name"]}>{person["name"]} {person["number"]}</li>
                    )
                }
            </ul> 
        </div>
    )
}
export default Numbers