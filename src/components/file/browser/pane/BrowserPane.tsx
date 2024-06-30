import React from 'react';

import Folder from '../icon/Folder';

import styles from './style.module.css';
// NOTE: pane.css 이용해서, 툴팁 띄워주는 용도임.
import './pane.css';

export default function BrowserPane() {
  return (
    <div className={styles.browserPaneWrapper}>
      {/* 상단바가 필요하다면, 상단바가 보일곳. */}
      <div className={styles.browserPane}>
      {/* 폴더와파일들이 보일곳 */}
        {
          [0,1,2,3,4,5,6].map((i) => (
            <div key={`S_${i}`} className={styles.browserListRow}>
            {/* 파일/폴더의 한줄 */}
              {[0,1,2,3,4,5].map((j) => <Folder key={`F_${j}`} />)}
            </div>
          ))
        }
      </div>
    </div>
  );
}
