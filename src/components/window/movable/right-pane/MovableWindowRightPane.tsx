import React from 'react';

import styles from './style.module.css';
import TopBar from './top/TopBar';
import BodyContainer from './body/BodyContainer';

export default function MovableWindowRightPane() {
  return (
    <div className={styles.rightPane}>
      <TopBar />
      <BodyContainer />
      
    </div>
  )
}
