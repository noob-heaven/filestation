import React from 'react';

import { getDepth } from '@common/utils/path.utils';
import { simpleHash } from '@common/utils/hash.utils';

import styles from './tree.module.css';
import { ITreeData } from './@types/tree.data';
import MemoizedSpacer from './Spacer';

/** 여기는 항상 Leaf Node (파일) 만이 들어가는곳이라, ul로 감쌀필요없음! */
export default function TerminalLeaf(props: ITreeData) {
  const pathHash = simpleHash(props.path);
  const htmlId = `caret_${pathHash}`;

  return (
    <li className={styles.TerminalLi}>
      <MemoizedSpacer count={getDepth(false, props.path)} isTerminal={true} />
      <label htmlFor={htmlId} className="file-tree">{props.name}</label>
    </li>
  )
}
