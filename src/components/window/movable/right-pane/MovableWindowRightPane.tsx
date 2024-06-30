import React from 'react';

import SimpleDefaultButton from '@components/button/simple/SimpleDefaultButton';

import styles from './MovableWindowRight.module.css';

export default function MovableWindowRightPane() {
  return (
    <div className={styles.rightPaneStyle}>
      <div className={styles.topBarStyle}>
        <SimpleDefaultButton text="TEXT"/>
        <div className={styles.topBarButtonWrapper}>
          <button className={styles.topBarButton}>X</button>
        </div>
      </div>

    </div>
  )
}
