import React from 'react';

import styles from './tree.module.css';
import './tree.css';

export default function Root({ children }: { children: React.ReactNode }) {
  return (

    <div className="tree-wrapper">
      <ul>
        <li className={styles.treeNonTerminal}>
          <input type="checkbox" id="caret" />
          <label className="tree">Root</label>
        </li>
      </ul>
    </div>
  )
}
