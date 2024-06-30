import React from 'react';

import { RiFolderFill } from '@remixicon/react';

import styles from './style.module.css';

export default function BrowserPane() {
  return (
    <div className={styles.browserPane}>
      <h1>BrowserPane</h1>
      <RiFolderFill />
    </div>
  );
}
