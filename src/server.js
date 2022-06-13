require('dotenv').config();

const Hapi = require('@hapi/hapi');

const teachers = require('./api/Teachers');
const TeachersService = require('./services/db/Teacher');
const TeachersValidator = require('./validator/teachers')

const init = async () => {
    const teachersService = new TeachersService();

    const
    server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST,
        //mengatasi close origin
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    await server.register([{
        plugin: teachers,
        options: {
            service: teachersService,
            validator: TeachersValidator
        }
}])
    await server.start();    
    console.log(`server berjalan pada ${server.info.uri}`);
}
init();