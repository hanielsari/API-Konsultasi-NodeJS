//kelas Handler hanya melakukan pengambilan request dan response
class TeachersHandler {
    constructor(service, validator) {
        this._service = service;
        this._validator = validator;
        //binding method di bawah ke class
        this.addTeacherHandler = this.addTeacherHandler.bind(this);
        this.getAllTeachersHandler = this.getAllTeachersHandler.bind(this);
        this.getTeacherByIdHandler = this.getTeacherByIdHandler.bind(this);
        this.editTeacherByIdHandler = this.editTeacherByIdHandler.bind(this);
        this.deleteTeacherByIdHandler = this.deleteTeacherByIdHandler.bind(this);
    }

    async addTeacherHandler(request, h) {
        try {
            this._validator.validateTeacherPayload(request.payload);
            const {name, description, profile_photo_path, subject, rate} = request.payload;
            const teacherId = await this._service.addTeachers({name, description, profile_photo_path, subject, rate});
            //set response
            const response = h.response({
                status: 'success',
                message: 'Teacher berhasil disimpan',
                data: {
                    teacherId: teacherId
                }
            })
            response.code(201);
            return response;
        } catch (e) {
            const response = h.response({
                status: 'fail',
                message: e.message,
            });
            response.code(400);
            return response;
        }
    }

    async getAllTeachersHandler() {
        const teachers = await this._service.getTeacher()
        return {
            status: 'success',
            message: 'Catatan berhasil disimpan',
            data:
                {
                    teachers
                }
        };
    }

    async getTeacherByIdHandler(request, h) {
        try {
            const {id} = request.params;
            const teacher = await this._service.getTeachersById(id);
            return {
                status: 'success',
                message: 'Teacher berhasil disimpan',
                data:
                    {
                        teacher
                    }
            };
        } catch (error) {
            const response = h.response({
                status: 'fail',
                message: error.message,
            })
            response.code(404);
            return response;
        }
    }

    async editTeacherByIdHandler(request, h) {
        try {
            await this._validator.validateTeacherPayload(request.payload);
            const {id} = request.params;
            const {name, description, profile_photo_path, subject, rate} = request.payload;
            await this._service.editTeacherById(id, {name, description, profile_photo_path, subject, rate});
            return {
                status: 'success',
                message: 'Catatan berhasil diperbaharui',
            }
        } catch (e) {
            const response = h.response({
                status: 'fail',
                message: e.message,
            })
            response.code(404);
            return response;
        }
    }

    async deleteTeacherByIdHandler(request, h) {
        try {
            const {id} = request.params;
            await this._service.deleteTeacherById(id);
            return {
                status: 'success',
                message: 'Teacher berhasil dihapus',
            }
        } catch (e) {
            const response = h.response({
                status: 'fail',
                message: e.message,
            })
            response.code(404);
            return response;
        }
    }
}

module.exports = TeachersHandler;