import {Focused} from './typs'

export interface User {
  _id: string
  username: string
  firstName: string
  lastName: string
  email: string
}

export interface UserGeneralState {
  registrationData: RegisterFormValues
  isCheckingSession: boolean
  isLogin: boolean
  showRegistrationForm: boolean
  showLoginForm: boolean
  user: User | null
}
export interface ItemsGeneralState {
  data: ArrOfObj[]
  countChanged: number
  isBuy: boolean
}

export interface ProtectedRouteProps {
  children: React.ReactNode
  redirectPath?: string
}
export interface ItemProps {
  price: number
  img: string
  author: string
  itemId: string
  isChanged?: boolean
  deleteItem?: any
}

export interface LoginFormValues {
  email: string
  password: string
}

export interface NavLinkItem {
  path: string
  label: string
}

export interface SearchByAuthorProps {
  searchAuthor: (value: string) => void
  deleteSearchAuthor: () => void
  value: string
}

export interface ArrOfObj {
  itemId: string
  url: string
  author: string
  uuId: string
  isChanged: boolean
}

export interface RegisterFormValues {
  email: string
  username: string
  firstName: string
  lastName: string
  password: string
  confirmPassword: string
}

export interface ExistingObject {
  id: string
  url: string
  author: string
}

export interface PaymentFormState {
  number: string
  expiry: string
  cvc: string
  name: string
  focus: Focused | undefined
}
export interface ImageCarouselHook {
  numImages?: number
  timeIntervalSet: number
  size: number
}
