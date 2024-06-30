import React, { memo } from 'react';

import { ITreeData } from '@components/file/@types/tree.data';
import MemoizedNonTerminalLeaf from './leaf/NonTerminalLeaf';

import './tree.css';

export function TreeView(props: ITreeData): React.ReactElement {
  // NOTE: 트리의 시작점 -> Wrapper 로 감싸주고 이하 노드에 대하여 Loop 돌면서 NonTerminal / TerminalLeaf 검사해주는 구문은 동일함
  return (
    <div className="tree-wrapper">
      <MemoizedNonTerminalLeaf {...props} />
    </div>
  );
}

// NOTE: 중요하지만, 좀더 하위에서 비교해야할 수 도 있는 아이들

const MemoizedTreeView = memo(TreeView, (prev, next) => true);

export default MemoizedTreeView;
