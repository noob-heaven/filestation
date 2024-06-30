import React from 'react';

import styles from './MovableWindowRight.module.css';
export default function MovableWindowRightPane() {
  return (
    <div className={styles.rightPaneStyle}>
      <div className={styles.topBarStyle}>
        <div className={styles.topBarButtonWrapper}>
          <button className={styles.topBarButton}>X</button>
        </div>
        <div className={styles.topBarButtonWrapper}>
          <button className={styles.topBarButton}>X</button>
        </div>
      </div>

    </div>
  )
}
