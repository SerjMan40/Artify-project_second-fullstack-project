import {toast} from 'react-toastify'

export const notifyUserExists = (errorMessages: string) => {
  toast.error(errorMessages, {
    position: 'top-center',
    autoClose: 5000,
  })
}

export const notifyLogin = (errorMessage: string) => {
  toast.error(errorMessage, {
    position: 'top-center',
    autoClose: 5000,
  })
}
export const notifyGrittings = () => {
  toast.success('You login successfull!', {
    position:"bottom-right",
    autoClose: 5000,
    theme: 'colored',
  })
}
