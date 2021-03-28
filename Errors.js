/* Съедает следующие телефоны:
+7(903)888-88-88
8(999)99-999-99
+380(67)777-7-777
001-541-754-3010
+1-541-754-3010
+7-904-391-67-87
19-49-89-636-48018
+233 205599853

/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
*/
function isValidPhone(phone) {
    // /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
    //  /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(phone);
    return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone);
}
function isValidEmail(email) {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
}
function isValidName(name) {
    return !(name.length <= 2);
}
function isValidMessage(message) {
    return !(message.length < 30);
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
class PropertyRequiredError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PropertyRequiredError';
    }
}
function validateForm() {

    try {
        let name = document.getElementsByName('name')[0].value;
        let phone = document.getElementsByName('phone')[0].value;
        let message = document.getElementsByName('message')[0].value;
        let email = document.getElementsByName('email')[0].value;
        let theme = document.getElementsByName('theme')[0].value;
        let checked = document.getElementsByName('respond')[0].checked;

        if (!name) { throw new PropertyRequiredError('Введите имя'); };
        if (!theme) { throw new PropertyRequiredError('Выберите тему сообщения'); };
        if (!message) { throw new PropertyRequiredError('Введите сообщение'); };

        if (!isValidName(name)) throw new ValidationError("Слишком короткое имя!");
        if (!isValidMessage(message)) throw new ValidationError("Пожалуйста, опишите вопрос подробнее");

        if (checked) {
            if (!email && !phone) { throw new PropertyRequiredError('Введите номер телефона или email для обратной связи'); };
            if (phone) { if (!isValidPhone(phone)) throw new ValidationError("Некорректный номер телефона!"); }
            if (email) { if (!isValidEmail(email)) throw ValidationError("Некорректный email!"); }
        }
        alert('Сообщение отправлено :)');
    } catch (err) {
        if (err instanceof ValidationError) { alert(err.message); }
        else if (err instanceof PropertyRequiredError) { alert(err.message); }
        else {
            alert(err.name + ": " + err.message);
        }
    }
}





/*
Зеленый свет для:
+79261234567
89261234567
79261234567
+7 926 123 45 67
8(926)123-45-67
123-45-67
9261234567
79261234567
(495)1234567
(495) 123 45 67
89261234567
8-926-123-45-67
8 927 1234 234
8 927 12 12 888
8 927 12 555 12
8 927 123 8 123
+7-800-555-35-35
^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$

*/
