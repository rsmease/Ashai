export const fetchTask = (taskId) => (
    $.ajax({
        url: `api/tasks/${taskId}`,
        method: 'GET',
        data: {
            taskId
        }
    })
);

export const postTask = (task) => (
    $.ajax({
        url: 'api/tasks',
        method: 'POST',
        data: {
            task
        }
    })
);

export const updateTask = (taskFormData) => (
    $.ajax({
        url: `api/tasks/${taskFormData.id}`,
        method: 'PATCH',
        data: {
            task: taskFormData
        }
    })
);

export const deleteTask = (taskId) => (
    $.ajax({
        url: `api/tasks/${taskId}`,
        method: 'DELETE',
        data: {
            taskId
        }
    })
);