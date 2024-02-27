const Phonebook = ({
    setSearchNumber
}) => {

    const handleUpdateFilter = (event) => {    
        console.log(event.target.value)    
        setSearchNumber(event.target.value)  
    }
    return (
        <div className="container">
            <h1>Phonebook</h1>
            <p>Filter shown with</p>
            <input onChange={handleUpdateFilter}></input>
        </div>
    )
}
export default Phonebook;