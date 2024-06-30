import React from 'react';

import { MovableWindowTitleProps } from './@types/movableWindowTitle.props';
import styles from './style.module.css';

export default function MovableWindowTitle({ title }: MovableWindowTitleProps) {
  return (
    <div id="titleContainer" className={styles.titleContainer}>
      <div id="titleWrapper" className={`${styles.titleItem} ${styles.title}`}>{title}</div>
    </div> 
  );
}
