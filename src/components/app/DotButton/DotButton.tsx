import React from 'react'

import styles from './DotButton.module.css';

export const DotButton = () => {
  return (
    <button className={styles.button}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
