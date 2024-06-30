import React from 'react';

import { TEST_TREE } from '@constants/testTree.constant';
import MemoizedTreeView from '@components/file/tree/TreeView';

import styles from './MovableWindowLeftPane.module.css';

export default function MovableWindowLeftPane() {
  return (
    <div className={styles.leftPaneStyle}>
      <MemoizedTreeView {...TEST_TREE} />
    </div>
  )
}
