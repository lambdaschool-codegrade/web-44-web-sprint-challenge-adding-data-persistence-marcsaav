const db = require('../../data/dbConfig')

const createProject = async (project) => {
    const ids = await db('projects').insert(project)
    const pro = await db('projects').where('project_id', ids)
    const projectToGive = {
        ...pro[0],
        project_completed: pro[0].project_completed === 1 ? true : false
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