import {Formik, Form, Field, ErrorMessage} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '../../redux/store'

import {logToggleForm, regToggleForm, toggleAuthLog} from '../../redux/slices/userSlices'
import {LoginFormValues} from '../../types/interfaces'
import {notifyGrittings, notifyLogin} from '../../utils/notify'

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>()

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  })

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      const response = await axios.post('http://localhost:4000/login', values, {})
      if (response.status === 200) {
        dispatch(toggleAuthLog())
        dispatch(logToggleForm(false))
        notifyGrittings()
      }
    } catch (error: unknown) {
      console.error('Error during login:', error)
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response ? error.response.data : 'Unknown error'
        console.log(errorMessage)
        notifyLogin(errorMessage)
      } else {
        notifyLogin('An unknown error occurred. Please try again.')
      }
    }
  }

  const fields = [
    {name: 'email', type: 'email', label: 'Email'},
    {name: 'password', type: 'password', label: 'Password'},
  ]

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({isSubmitting}) => (
          <Form className='auth-form'>
            <h2 className='auth-form__title'>Login</h2>
            {fields.map(({name, type, label}) => (
              <div key={name} className='auth-form__field'>
                <Field type={type} name={name} placeholder={label} />
                <ErrorMessage name={name} component='div' className='auth-form__error' />
              </div>
            ))}
            <div className='auth-form__controls'>
              <button type='submit' disabled={isSubmitting}>
                Login
              </button>
              <button onClick={() => dispatch(regToggleForm(true))}>Registration</button>
            </div>
            <div className='auth-form__close' onClick={() => dispatch(logToggleForm(false))}>               
              </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
