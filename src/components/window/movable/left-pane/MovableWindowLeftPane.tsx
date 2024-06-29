import React from 'react';

import Root from '@components/file/tree/Root';
import { TEST_TREE } from '@constants/testTree.constant';

import styles from './MovableWindowLeftPane.module.css';

export default function MovableWindowLeftPane() {
  return (
    <div className={styles.leftPaneStyle}>
      <Root {...TEST_TREE} />
    </div>
  )
}
