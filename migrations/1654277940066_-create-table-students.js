/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('students',{
    student_id:{
        type:'VARCHAR(10)',
        primaryKey: true,
    },
    name_student:{
        type:'VARCHAR(50)',
        notNull:true
    },
    kelas:{
        type:'VARCHAR(10)',
        notNull:true
    },
    created_at:{
        type:'TEXT',
        notNull: true
    },
    update_at:{
        type:'TEXT',
        notNull: true
    },
})};

exports.down = pgm => {pgm.dropTable('students')};
