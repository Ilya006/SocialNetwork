import React from 'react'
import cn from 'classnames'

import { db } from './../../../firebase'

import { collection, addDoc } from "firebase/firestore"

import { ReactComponent as Info } from '@assets/image/info.svg'
import { ReactComponent as Send } from '@assets/image/send.svg'
import { DotButton } from '@components/app'

import styles from './Chat.module.css'



export const Chat = () => {
  console.log(db)

  const [ valueNewMsg, setValueNewMsg ] = React.useState('')

  const onChangeNewMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueNewMsg(e.target.value)
  }

  const onSubmitMsg = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
  }

  return (
    <div className={styles.chat}>

      <div className={cn(styles.chat__header, styles.header)}>
        <div className={styles.header__user}>
          <img 
            className={cn('avatar', 'avatar_small')}
            src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" 
            alt="" 
          />
          <div className={styles.header__info}> 
            <h3>Анастасия волочкова</h3>
            <span>Active now</span>
          </div>
        </div>
        <div className={styles.header__actions}>
          <Info />
        </div>
      </div>

      <div className={cn(styles.header__body, styles.body)}>
        <MessageItem whose='user' />
        <MessageItem whose='friend' />
        <MessageItem whose='user' />
        <MessageItem whose='friend' />
      </div>

      <div className={cn(styles.chat__footer, styles.footer)}>
        <form onSubmit={onSubmitMsg}>
          <input 
            type="text" 
            onChange={onChangeNewMsg} 
            value={valueNewMsg}
            className={styles.footer__input} 
            placeholder='Type something here...'
          />
          <button type='submit' className={styles.footer__btn}><Send /></button>
        </form>
      </div>

    </div>
  )
}



interface MessagePropsType {
  whose: 'user' | 'friend'
}

const MessageItem = (props: MessagePropsType) => {
  const { whose } = props

  return(
    <div 
      className={cn(
        styles.message, 
        {[styles[`message__${whose}`]]: whose}
      )}
    >
      <img 
        className={cn('avatar', 'avatar_extra-small')}
        src="https://i.insider.com/5cb8b133b8342c1b45130629?width=1136&format=jpeg" 
        alt="" 
      />
      <p>y name is Sergey. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam commodi expedita deleniti dolores, est voluptas id laboriosam quas deserunt?</p>
      <span className={styles.message__time}>24:20</span>
      <DotButton size='small' />
    </div>
  )
}