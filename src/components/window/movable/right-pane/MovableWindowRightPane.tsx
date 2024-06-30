import React from 'react';

import MemoizedSimpleDefaultButton from '@components/button/simple/SimpleDefaultButton';

import styles from './MovableWindowRight.module.css';

export default function MovableWindowRightPane() {
  const onClickWhat = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('what');
  }
  return (
    <div className={styles.rightPane}>
      <div className={styles.topBar}>
        <div className={styles.topBarLeftGroup}>
          <MemoizedSimpleDefaultButton onClick={onClickWhat}>모</MemoizedSimpleDefaultButton>
          <MemoizedSimpleDefaultButton>되는건</MemoizedSimpleDefaultButton>
          <MemoizedSimpleDefaultButton>없지만</MemoizedSimpleDefaultButton>
        </div>
        <div className={styles.topBarRightGroup}>
          <MemoizedSimpleDefaultButton>예쁘게</MemoizedSimpleDefaultButton>
          <MemoizedSimpleDefaultButton>보이려</MemoizedSimpleDefaultButton>
        </div>
      </div>
    </div>
  )
}
