class authFields {
    constructor() {
        this.elements = {
            'поле почта': this.Email,
            'поле пароль': this.Password
        }
        this.values = {
            Почту: 'm.filimonov+2@jetmail.cc',
            Пароль: 'Qwertyui'
        }
    }
    // селекторы 
    get Email() {
        return '//input[@data-test="email_field"]'  
    }
    get Password() {
        return '//input[@data-test="passwd_field"]'
    }
}

export default authFields