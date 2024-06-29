import React from 'react';

import styles from './tree.module.css';
import { ITreeData } from './@types/tree.data';
import { Spacer } from './Spacer';
import { getDepth } from '@common/utils/path.utils';

/** 여기는 항상 Leaf Node (파일) 만이 들어가는곳이라, ul로 감쌀필요없음! */
export default function TerminalLeaf(props: ITreeData) {
  return (
    <li className={styles.nonTerminalLi}>
      <Spacer count={getDepth(true, props.path)} />
      <input type="checkbox" id={`caret_${props.path}`} />
      <label htmlFor={`caret_${props.path}`} className="tree">{props.name}</label>
    </li>
  )
}
