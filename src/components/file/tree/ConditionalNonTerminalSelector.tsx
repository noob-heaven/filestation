import React from 'react';
import { ITreeData } from './@types/tree.data';
import NonTerminalLeaf from './NonTerminalLeaf';
import TerminalLeaf from './TerminalLeaf';


/** 여기는 Children 목록에 대하여 반복하며 분기 -> NonTerminal / Terminal 노드를 반환 */
export default function ConditionalNonTerminalSelector({ datas }: { datas: ITreeData[] }): React.ReactElement {
  return (
    <>
      {
        // children 돌면서, isLeaf -> Terminal, !isLeaf -> NonTerminal 로
        (datas || []).map((val, valIdx) => (
          (!val.isLeaf) // NOTE: 가지일경우임!
            ? <NonTerminalLeaf {...val} key={val.path} />
            : <TerminalLeaf {...val} key={val.path} />
        ))
      }
    </>
  );
}
