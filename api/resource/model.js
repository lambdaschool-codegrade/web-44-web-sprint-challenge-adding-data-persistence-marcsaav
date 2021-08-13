const db = require('../../data/dbConfig')

const createResource = (resource) => {
    return db('resources').insert(resource).then((ids) => {return db('resources'.where('resource_id', ids[0]))})
}

const getResources = () => {
    return db('resources')
}

module.exports = {
    createResource,
    getResources
}