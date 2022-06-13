const {Pool} = require('pg');
const {nanoid} = require("nanoid");

class Teacher {
    constructor() {
        this._pool = new Pool();
    }

    async addTeachers({name, description, profile_photo_path, subject, rate}) {
        const teacher_id = nanoid(16);
        const createAt = new Date().toISOString();


        const query = {
            text: 'INSERT INTO teachers VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING teacher_id',
            values: [teacher_id, name, description, profile_photo_path, subject, rate, createAt, createAt]
        }
        const result = await this._pool.query(query);
        if (!result.rows[0].teacher_id) {
            throw new Error("Teacher gagal ditamabahkan");
        }
        return result.rows[0].teacher_id;

    }

    async getTeacher() {
        const result = await this._pool.query('SELECT * FROM teachers');
        return result.rows;
    }

    async getTeachersById(id) {
        const query = {
            text: 'SELECT * FROM teachers where teacher_id=$1',
            values: [id]
        }
        const result = await this._pool.query(query);
        if (!result.rows.length) {
            throw new Error('Id tidak ditemukan')
        }
        return result.rows[0];
    }

    async editTeacherById(teacher_id, {name, description, profile_photo_path, subject, rate}) {
        const updateAt = new Date().toISOString();
        const query = {
            text: 'UPDATE teachers SET name=$1, description=$2, profile_photo_path=$3, subject=$4, rate=$5, update_at=$6 WHERE teacher_id=$7 RETURNING teacher_id',
            values: [name, description, profile_photo_path, subject, rate, updateAt,teacher_id]      
         }
        const result = await this._pool.query(query);
        if (!result.rows.length) {
            throw new Error('gagal memperbaharui data guru, catatan tidak ditemukan')
        }
        return result.rows[0];
    }

    async deleteTeacherById(id) {
        const query = {
            text: 'DELETE FROM teachers WHERE teacher_id=$1 RETURNING teacher_id',
            values: [id]
        }
        const result = await this._pool.query(query);
        if (!result.rows.length) {
            throw new Error('Data Guru gagal dihapus')
        }
        return result.rows[0];
    }
}

module.exports = Teacher;