import React from 'react';

import './tree.css';
import { ITreeData } from './@types/tree.data';
import NonTerminalLeaf from './NonTerminalLeaf';

const props: ITreeData = {
  isLeaf: false,
  name: 'Root',
  path: '/',
  childLeaf: [
    {
      isLeaf: true,
      name: 'Terminal(/terminal1.txt)',
      metadata: {
        size: 1,
        extension: 'txt',
      },
      path: '/terminal1.txt',
    },
    {
      isLeaf: true,
      name: 'Terminal(/terminal2.txt)',
      metadata: {
        size: 1,
        extension: 'txt',
      },
      path: '/terminal2.txt',
    },
    {
      isLeaf: false,
      name: 'NonWithChild(/non1/)',
      path: '/non1/',
      childLeaf: [
        {
          isLeaf: true,
          name: 'Non1Term1(/non1/term1.pdf)',
          path: '/non1/term1.pdf',
        },
        {
          isLeaf: true,
          name: 'Non1Term2(/non1/term2.pdf)',
          path: '/non1/term2.pdf',
        },
        {
          isLeaf: false,
          name: 'Non1Sub1(/non1/sub/)',
          path: '/non1/sub/',
          childLeaf: [
            {
              isLeaf: true,
              name: 'Non1Sub1Term(/non1/sub/term.end)',
              path: '/non1/term1.pdf',
            },
          ]
        },
      ]
    },
    {
      isLeaf: false,
      name: 'NonWithoutChild(/non2/)',
      path: '/non2/',
    },
  ]
};

export default function Root() {

  // NOTE: 트리의 시작점 -> Wrapper 로 감싸주고 이하 노드에 대하여 Loop 돌면서 NonTerminal / TerminalLeaf 검사해주는 구문은 동일함
  return (
    <div className="tree-wrapper">
      <ul>
        <NonTerminalLeaf {...props} />
      </ul>
    </div>
  )
}
