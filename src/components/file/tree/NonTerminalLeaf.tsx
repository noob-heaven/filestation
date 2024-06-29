import React from 'react';

import styles from './tree.module.css';
import { ITreeData } from './@types/tree.data';
import ConditionalNonTerminalSelector from './ConditionalNonTerminalSelector';
import { Spacer } from './Spacer';
import { getDepth } from '@common/utils/path.utils';

// NOTE: 논터미널 -> 단말 노드를 가지고 있는것들임 <li>해당 리프 내용물 inside: <ul>{내용물}</ul> </li> 로 해줘야함
export default function NonTerminalLeaf(props: ITreeData) {
  return (
    <ul>
      <li className={styles.nonTerminalLi}>
        <Spacer count={getDepth(false, props.path)} />
        <input type="checkbox" id={`caret_${props.path}`} />
        <label htmlFor={`caret_${props.path}`} className="tree">{props.name}</label>
        { /* HACK: 여기 들어가는 부분은 공통되니까 한번 빼버리잠 */}
        <ConditionalNonTerminalSelector datas={props.childLeaf || []} />
      </li>
    </ul>
  );
}