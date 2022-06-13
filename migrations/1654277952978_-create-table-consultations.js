/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {pgm.createTable('consultations',{
    playlist_songs_id:{
        type:'VARCHAR(10)',
        primaryKey: true,
    },
    student_id:{
        type:'VARCHAR(10)',
        constraint:'fk_student_id',
        foreignKeys:true,
        references:'students(student_id)',
    },
    teacher_id:{
        type:'VARCHAR(10)',
        notNull:true,
        constraint:'fk_teacher_id',
        foreignKeys:true,
        references:'teachers(teacher_id)',
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

exports.down = pgm => { pgm.dropTable('consultations')};
