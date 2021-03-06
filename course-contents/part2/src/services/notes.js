import axios from 'axios'
// const baseUrl = 'http://localhost:3001/notes'
const baseUrl = '/api/notes'

const getAll = () => {
  return axios.get(baseUrl)
}

// const getAll = () => {
//   const request = axios.get(baseUrl)
//   return request.then(response => response.data)
// }

const create = (newObject) => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

// export default { 
//   getAll: getAll, 
//   create: create, 
//   update: update 
// }
// export default {getAll, create, update} // ES6 

const noteService = {
  getAll, create, update
}

export default noteService


