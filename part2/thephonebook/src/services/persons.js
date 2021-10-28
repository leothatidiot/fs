import axios from "axios";

// const baseUrl = 'http://localhost:3001/persons' // json-server
const baseUrl = '/api/persons' // backend

const create = (object) => {
  const request = axios.post(baseUrl, object)
  return request.then(response => response.data)
}

const deleteId = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response)
}

const read = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const update = (id ,object) => {
  const request = axios.put(`${baseUrl}/${id}`, object)
  return request.then(response => response.data)
}

const personService = {
  create, deleteId, read, update
}

export default personService