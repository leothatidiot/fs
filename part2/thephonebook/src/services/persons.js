import axios from "axios";

const create = (object) => {
  const request = axios.post('http://localhost:3001/persons', object)
  return request.then(response => response.data)
}

const deleteId = (id) => {
  const request = axios.delete(`http://localhost:3001/persons/${id}`)
  return request.then(response => response)
}

const read = () => {
  const request = axios.get('http://localhost:3001/persons/')
  return request.then(response => response.data)
}

const update = (id ,object) => {
  const request = axios.put(`http://localhost:3001/persons/${id}`, object)
  return request.then(response => response.data)
}

const personService = {
  create, deleteId, read, update
}

export default personService