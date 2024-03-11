import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const createPerson = async newPerson => {
  const request = axios.post(baseUrl, newPerson)
  const response = await request
  return response.data
}
const updatePerson = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  const response = await request
  return response.data
}
const deletePerson = async (id) => {
  console.log("Executing this...")
  const request = axios.delete(`${baseUrl}/${id}`)
  console.log("id", request)
  const response = await request
  return response.data
}
export default { getAll, createPerson , deletePerson, updatePerson}