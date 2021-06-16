import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email address is required'),
    password: yup.string().min(6, 'Password is too short').max(20, 'Password is too long').required('Password is required')
})