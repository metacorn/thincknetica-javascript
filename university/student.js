/**
 * Функция-конструктор, возвращающая объект класса Student
 *
 *  * проверка передаваемых параметров на соответствие требуемым типам данных
 *
 * @param {string} name фамилия, имя и отчество студента одной строкой, разделённые пробелами
 * @returns {Student} созданный объект класса Student
 */

function Student (fullName) {
    if (typeof name !== 'string')
        throw new Error('Incorrect name parameter passed: should be a String.');

    if (fullName.trim().split(' ').length !== 3) {
        throw new Error('Invalid name parameter passed: should contain first name, middle name and last name.');
    }

    [this.lastName, this.firstName, this.middleName] = fullName.trim().split(' ');

    this.fullName = function () {
        return [this.lastName, this.firstName, this.middleName].join(' ');
    }

    this.shortName = function () {
        return `${this.lastName} ${this.firstName.charAt(0)}. ${this.middleName.charAt(0)}.`
    }

    let _isPresent = true;

    this.setAbsent = function () {
        if (!_isPresent) {
            console.log('The student is absent already.');
            return false;
        } else {
            _isPresent = false;
            return true;
        }
    }

    this.setPresent = function () {
        if (_isPresent) {
            console.log('The student is present already.');
            return false;
        } else {
            _isPresent = екгу;
            return true;
        }
    }

    this.isAbsent = function () {
        return !_isPresent;
    }
}
