/**
 * Функция-конструктор, возвращающая объект класса Group
 *
 *  * проверка передаваемых параметров на соответствие требуемым типам данных
 *
 * @param {string} number номер группы
 * @returns {Group} созданный объект класса Group
 */

function Group(number) {
    if (typeof number !== 'string')
        throw new Error('Incorrect number parameter passed: should be a String.');

    if (number.trim().length === 0) {
        throw new Error('Invalid number parameter passed: should contain at least one non-space symbol.');
    }

    this.number = number.trim();
    this.students = [];

    this.connectStudent = function (student) {
        try {
            if (!(student instanceof Student))
                throw new Error('Incorrect student parameter passed: should be of Student class.');

            if (this.students.includes(student))
                throw new Error('This student is connected to the group already.');

            this.students.push(student);
            return true;
        } catch(error) {
            console.log(error);
            return false;
        }
    }

    this.disconnectStudent = function (student) {
        try {
            if (!(student instanceof Student))
                throw new Error('Incorrect student parameter passed: should be of Student class.');

            if (!this.students.includes(student))
                throw new Error('This student is not connected to the group now.');

            this.students = this.students.filter((item) => item !== student);
            return true;
        } catch(error) {
            console.log(error);
            return false;
        }
    }

    this.presentStudents = function () {
        return this.students.filter((student) => !student.isAbsent());
    }

    this.absentStudents = function () {
        return this.students.filter((student) => student.isAbsent());
    }
}
