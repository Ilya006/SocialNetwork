import React from 'react'
import { useStore } from 'effector-react/compat'
import { Navigate, useNavigate } from 'react-router-dom'

import { SignupForm } from 'features/auth/signup-form'
import { $isAuth } from 'entities/user/model'
import { Element, Layout } from 'shared/ui'

import styles from './styles.module.css'

const SignUp = () => {
  const isAuth = useStore($isAuth)

  if (isAuth) {
    return <Navigate to="/feed" />
  }

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.container}>
          <Element>
            <div className={styles.wrapper}>
              <h2>Registration</h2>
              <SignupForm />
            </div>
          </Element>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp