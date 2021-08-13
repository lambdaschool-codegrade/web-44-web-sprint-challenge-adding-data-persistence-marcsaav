const db = require('../../data/dbConfig')

const createProject = async (project) => {
    const pro = await db('projects').insert(project)
    const projectToGive = {
        ...pro,
        project_completed: false
    }
    return projectToGive
}

const getProjects = async () => {
    const projects = await db('projects')
    const projectsToGive = projects.map((pro) => {
        let project = {
            ...pro,
            project_completed: pro.project_completed === 1 ? true : false
        }
        return project
    })
    return projectsToGive
}

module.exports = {
    createProject,
    getProjects
}