import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}
    
const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
    axios.delete(`${baseUrl}/${id}`)
    return getAll()
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

export default { 
    getAll: getAll, 
    create: create, 
    deletePerson: deletePerson,
    update: update 
}