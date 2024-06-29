import NonTerminalLeaf from '@components/file/tree/NonTerminalLeaf';
import Root from '@components/file/tree/Root';
import TerminalLeaf from '@components/file/tree/TerminalLeaf';
import React from 'react';
export default function MovableWindowLeftPane() {
  return (
    <div style={{ background: '#ffffff', width: '100%', height: '100%', color: '#000' }}>
      <div>
        <ul>
          <Root>
            <NonTerminalLeaf>
              <TerminalLeaf />
            </NonTerminalLeaf>
          </Root>
        </ul>
      </div>
    </div>
  )
}
