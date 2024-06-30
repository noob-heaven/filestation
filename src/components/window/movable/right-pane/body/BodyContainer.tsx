import React from 'react';

import BrowserPane from '@components/file/browser/pane/BrowserPane';

import styles from './style.module.css';

export default function BodyContainer() {
  return (
    <div className={styles.bodyContainer}>
      {/* 보기 목록(목록 / 아이콘)에 따라 조건부 랜더링을 이쪽에서 구성 */}
      <BrowserPane />
    </div>
  );
}
