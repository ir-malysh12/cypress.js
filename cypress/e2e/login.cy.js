describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль


        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('qa_one_love1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти


        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю

    })

//Найти поле логин и ввести правильный логин
//Найти поле пароль и ввести правильный пароль
//Найти кнопку войти и нажать на неё
//Проверить, что авторизация прошла успешно

it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#forgotEmailButton').click(); // Нажали восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажали отправить код


        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю

    })

//Найти кнопку восстановить пароль и нажать на неё
//Найти поле логин и ввести почту для восстановления
//Найти кнопку отправить код и нажать на неё
//Проверить, код отправлен на почту


   it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль


        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('qa_one_love7'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти


        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю

    })

//Найти поле логин и ввести правильный логин
//Найти поле пароль и ввести неправильный пароль
//Найти кнопку войти и нажать на неё
//Проверить, что авторизация не прошла успешно

it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль


        cy.get('#mail').type('derman@dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('qa_one_love1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти


        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю

    })

//Найти поле логин и ввести неправильный логин
//Найти поле пароль и ввести правильный пароль
//Найти кнопку войти и нажать на неё
//Проверить, что авторизация не прошла успешно

it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль


        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('qa_one_love1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти


        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю

    })

//Найти поле логин и ввести логин без @
//Найти поле пароль и ввести правильный пароль
//Найти кнопку войти и нажать на неё
//Проверить, что есть ошибка валидации

it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль


        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели верный логин, но разного регистра
        cy.get('#pass').type('qa_one_love1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти


        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю текст на совпадение
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю, что крестик есть и виден пользователю

    })
})

//Найти поле логин и ввести правильный логин, но разного регистра
//Найти поле пароль и ввести правильный пароль
//Найти кнопку войти и нажать на неё
//Проверить, что авторизация не прошла. Значит есть баг, который надо исправить разработчику (чтобы буквы приравнивались к строчным)