import {Formik, Form, Field, ErrorMessage} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'

import {RootState} from '../../redux/store'
import {regToggleForm, toggleAuthLog, toggleAutReg, } from '../../redux/slices/userSlices'
import {RegisterFormValues} from '../../types/interfaces'
import {notifyUserExists} from '../../utils/notify'

const Registration = () => {
  const initialValues = useSelector((state: RootState) => state.user.registrationData)
  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    username: Yup.string().required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, 'Must contain a letter and a number')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
  })

  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      const response = await axios.post('http://localhost:4000/register', values)
      if (response.status === 200) {
        dispatch(toggleAutReg())
        dispatch(toggleAuthLog())
        dispatch(regToggleForm(false))
      }
    } catch (error: unknown) {
      console.error('Error during registration:', error)
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response ? error.response.data : 'Unknown error'
        notifyUserExists(errorMessage)
      } else {
        notifyUserExists('An unknown error occurred. Please try again.')
      }
    }
  }

  const fields = [
    {name: 'email', type: 'email', label: 'Email'},
    {name: 'username', type: 'text', label: 'Username'},
    {name: 'firstName', type: 'text', label: 'First Name'},
    {name: 'lastName', type: 'text', label: 'Last Name'},
    {name: 'password', type: 'password', label: 'Password'},
    {name: 'confirmPassword', type: 'password', label: 'Confirm Password'},
  ]

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({isSubmitting, isValid, dirty}) => (
          <Form className={'auth-form'}>
            <h2 className='auth-form__title'>Registration</h2>
            {fields.map(({name, type, label}) => (
              <div key={name} className='auth-form__field'>
                <Field type={type} name={name} placeholder={label} />
                <ErrorMessage name={name} component='div' className='auth-form__error' />
              </div>
            ))}
            <div className='auth-form__controls'>
              {dirty && isValid && (
                <button type='submit' disabled={isSubmitting}>
                  Register
                </button>
              )}
            </div>
              <div className='auth-form__close' onClick={() => dispatch(regToggleForm(false))}>
                
              </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Registration
