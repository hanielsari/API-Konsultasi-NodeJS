const TeacherPayloadSchema = require('./schema');
const TeachersValidator = {
    validateTeacherPayload: (payload) => {
        const validatationResult = TeacherPayloadSchema.validate(payload);
        if (validatationResult.error) {
            throw new Error(validatationResult.error.message);
        }
    }
}
module.exports = TeachersValidator;