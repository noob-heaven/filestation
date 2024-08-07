import React, { memo, useState } from 'react';

import { getDepth } from '@common/utils/path.utils';
import { simpleHash } from '@common/utils/hash.utils';

import { ITreeData } from '@components/file/@types/tree.data';
import ConditionalNonTerminalSelector from './ConditionalNonTerminalSelector';

import MemoizedSpacer from '../utillity/Spacer';
import styles from './style.module.css';

// NOTE: 논터미널 -> 단말 노드를 가지고 있는것들임 <li>해당 리프 내용물 inside: <ul>{내용물}</ul> </li> 로 해줘야함
export function NonTerminalLeaf(props: ITreeData) {

  let [isChecked, toggleCheck] = useState<boolean>(props.isOpen);

  const pathHash = simpleHash(props.path);
  const htmlId = `caret_${pathHash}`;

  return (
    <ul>
      <li className={styles.nonTerminalLi}>
        <MemoizedSpacer count={getDepth(true, props.path)} isTerminal={false}  />
        <input
          type="checkbox"
          id={htmlId}
          className="caret"
          checked={isChecked}
          onChange={({ target: { checked }}) => toggleCheck(checked)}
        />
        <label htmlFor={htmlId} className="file-tree">{props.name}</label>
        { /* HACK: 여기 들어가는 부분은 공통되니까 한번 빼버리잠 */}
      </li>
        {
          isChecked
          && <ConditionalNonTerminalSelector datas={props.childLeaf || []} />
        }
    </ul>
  );
}

// NOTE: 메모이징, 랜더링 조건은 isOpen 상태가 변경될때.
const MemoizedNonTerminalLeaf = memo(NonTerminalLeaf, (prev, next) => (prev.isOpen !== next.isOpen));
export default MemoizedNonTerminalLeaf;
