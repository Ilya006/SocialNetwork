import React from 'react';
import s from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialog = (props) => {
  return (
    <div className={s.dialogs}>
      <DialogItem dialogData={props.messagePage.dialogData} />
      <Message messageData={props.messagePage.messageData}
        dispatch={props.dispatch}
        newMessageText = {props.messagePage.newMessageText} />
    </div>
  )
}

export default Dialog;