const routes = (handler) => [
    {
        method: 'POST',
        path: '/teachers',
        handler: handler.addTeacherHandler,

    },
    {
        method: 'GET',
        path: '/teachers',
        handler: handler.getAllTeachersHandler,

    },
    {
        method: 'GET',
        path: '/teachers/{id}',
        handler: handler.getTeacherByIdHandler,

    },
    {
        method: 'PUT',
        path: '/teachers/{id}',
        handler: handler.editTeacherByIdHandler,

    },
    {
        method: 'DELETE',
        path: '/teachers/{id}',
        handler: handler.deleteTeacherByIdHandler,

    }
];
module.exports = routes;
