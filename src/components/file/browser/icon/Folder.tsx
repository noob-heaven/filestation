import React from 'react';

import { RiFolderFill } from '@remixicon/react';

import styles from './style.module.css';

export default function Folder() {
  const folderName = 'VeryBigAndLongFolderName!Err?';
  const shortFolderName = folderName.length > 8 ? `${folderName.slice(0, 8)}...` : folderName;

  return (
    <div className={styles.folderContainer}>
      <div className={styles.folderIconWrapper}>
        <RiFolderFill size="100%" color='#FFD700' />
        </div>
      <div className={styles.folderNameWrapper}>
        <span
          data-tooltip={folderName}
          className={styles.folderName}
        >
          {shortFolderName}
        </span>
      </div>
    </div>
  )
}
