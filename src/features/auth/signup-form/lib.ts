import * as Yup from 'yup'

export const errorsCode = {
  'auth/email-already-in-use': { email: 'Email already in use' },
}

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Require'),
  password: Yup.string().min(6, 'Password at least 6 characters'),
})
