/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('teachers',
    {
        teacher_id:{
            type:'VARCHAR(50)',
            primaryKey: true
        },
        name:{
            type:'VARCHAR(20)',
            notNull:true
        },
        description:{
            type:'VARCHAR(500)',
            notNull:true
        },
        profile_photo_path:{
            type:'VARCHAR(100)',
            notNull:true
        },
        subject:{
            type:'VARCHAR(20)',
            notNull:true
        },
        rate:{
            type:'INT',
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
    });
};

exports.down = pgm => {
    pgm.dropTable('teachers')
};
