import React from 'react';

import TitleBar from './title/TitleBar';
import BodyContainer from './body/BodyContainer';
import styles from './style.module.css';

export default function MovableWindowRightPane() {
  return (
    <div className={styles.rightPane}>
      <div>
        <TitleBar />
      </div>
      <BodyContainer />
    </div>
  )
}
