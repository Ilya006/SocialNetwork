export type ISignUp = {
  name: string
  email: string
  password: string
}

export type ISignIn = {
  email: string
  password: string
}

export type IUserData = {
  id: string
  name: string
  email: string
  online: boolean
}

export type INotifications = {
  messages?: number
  notification?: number
}