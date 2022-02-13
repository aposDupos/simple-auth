export const passwordRules = [
    {
        required: true,
        message: 'Please input your password!',
    },
    {
        min: 4,
        message: 'Password must be minimum 4 characters.'
    },
    {
        max: 10,
        message: 'Password must be maximum 10 characters.'
    },
    //Validating capital letters
    ({getFieldValue}) => ({
        validator(_, value) {
            if (!value || /[A-Z]/.test(getFieldValue('password'))) {
                return Promise.resolve()
            }
            return Promise.reject(new Error('The password must have capital letter'))
        }
    })
]
export const oldPasswordRules = [
    {
        required: true,
        message: 'Please input your password!',
    },
    {
        min: 4,
        message: 'Password must be minimum 4 characters.'
    },
]
export const emailRules = [
    {
        type: 'email',
        message: 'The input is not valid E-mail!',
    },
    {
        required: true,
        message: 'Please input your E-mail!',
    },
]
export const repeatPasswordRules = [
    {
        required: true,
        message: 'Please confirm your password!',
    },
    ({getFieldValue}) => ({
        validator(_, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords that you entered do not match!'))
        }
    })
]

export const formSettings = {
    labelCol: {span: 6},
    wrapperCol: {span: 14}
}