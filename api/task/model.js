const db = require('../../data/dbConfig')

const createTask = async (task) => {
    const ids = await db('tasks').insert(task)
    const taskToChange = await db('tasks').where('task_id', ids[0])
    const taskToGive = {
        ...taskToChange,
        task_completed: false
    }
    return taskToGive
}

const getTasks = async () => {
    const tasks = await db.select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')
                        .from('tasks as t')
                        .join('projects as p', 't.project_id', 'p.project_id')
    const tasksToGive = tasks.map((task) => {
        let taskToGive = {
            ...task,
            task_completed: task.task_completed === 1 ? true : false
        }
        return taskToGive
    })
    return tasksToGive
}

module.exports = {
    createTask,
    getTasks
}
